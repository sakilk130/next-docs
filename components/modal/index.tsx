import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
} from "@material-tailwind/react";
import firebase from "firebase";
import { useSession } from "next-auth/client";
import { useState } from "react";
import db from "../../db/firebase";

interface IModal {
  handleOpen: any;
  isOpen: boolean;
  size?: any;
}

const Modal = ({ handleOpen, isOpen, size }: IModal) => {
  const [title, setTitle] = useState("");
  const [session]: any = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateNewDocs = () => {
    if (title !== "") {
      setIsLoading(true);
      db.collection("userDocs")
        .doc(session?.user?.email)
        .collection("docs")
        .add({
          fileName: title,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
        });
      handleOpen(null);
      setTitle("");
      setIsLoading(false);
    }
  };

  return (
    <Dialog handler={handleOpen} open={isOpen} size={size}>
      <DialogHeader>Create new Document</DialogHeader>
      <DialogBody divider>
        <Input
          label="Enter name of document"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={() => handleOpen(null)}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleCreateNewDocs}>
          <span>{isLoading ? "Creating..." : "Confirm"}</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default Modal;
