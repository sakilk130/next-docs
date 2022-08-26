import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import debounce from "lodash/debounce";
import { useSession } from "next-auth/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import db from "../../db/firebase";
import firebase from "firebase";

const Editor = dynamic(
  async () => {
    const { Editor } = await import("react-draft-wysiwyg");
    return Editor;
  },
  {
    ssr: false,
  }
);
interface ITextEditor {
  setIsSaved: (value: string) => void;
}

const TextEditor = ({ setIsSaved }: ITextEditor) => {
  const [session]: any = useSession();
  const router = useRouter();
  const { id }: any = router.query;

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [snapshot, loading, error]: any = useCollectionOnce<any>(
    db
      .collection("userDocs")
      .doc(session?.user?.email)
      .collection("docs")
      .doc(id)
  );

  useEffect(() => {
    if (snapshot?.data().editorState) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(snapshot.data().editorState)
        )
      );
    }
  }, [snapshot]);

  const editDocInDb = useMemo(
    () =>
      debounce(async (editorState) => {
        await db.doc(`userDocs/${session?.user?.email}/docs/${id}`).set(
          {
            editorState: convertToRaw(editorState.getCurrentContent()),
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
        setIsSaved("Saved");
      }, 3000),
    []
  );

  const handleEditorStateChange = (editorState: any) => {
    setIsSaved("Saving ...");
    setEditorState(editorState);
    editDocInDb(editorState);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
        toolbarClassName="sticky top-0 z-50 !justify-center"
        editorClassName="bg-white mt-6 shadow-lg w-3/4 lg:w-3/5 mx-auto p-10 border mb-10 min-h-screen"
      />
    </div>
  );
};

export default TextEditor;
