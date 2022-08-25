import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
} from "@material-tailwind/react";
import React from "react";

interface IModal {
  handleOpen: any;
  isOpen: boolean;
  size?: any;
}

const Modal = ({ handleOpen, isOpen, size }: IModal) => {
  return (
    <Dialog handler={handleOpen} open={isOpen} size={size}>
      <DialogHeader>Create new Document</DialogHeader>
      <DialogBody divider>
        <Input label="Enter name of document" />
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
        <Button
          variant="gradient"
          color="green"
          onClick={() => handleOpen(null)}
        >
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default Modal;
