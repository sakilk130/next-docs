import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic(
  async () => {
    const { Editor } = await import("react-draft-wysiwyg");
    return Editor;
  },
  {
    ssr: false,
  }
);

const TextEditor = () => {
  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
      <Editor
        toolbarClassName="sticky top-0 z-50 !justify-center"
        editorClassName="bg-white mt-6 shadow-lg w-3/4 lg:w-3/5 mx-auto p-10 border mb-10 min-h-screen"
      />
    </div>
  );
};

export default TextEditor;
