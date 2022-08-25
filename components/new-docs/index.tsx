import { Button } from "@material-tailwind/react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CgArrowsV } from "react-icons/cg";
import { useEffect, useState } from "react";
import Modal from "../modal";

const NewDocs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section className="bg-gray-300 p-5 ">
      <div className="max-w-3xl mx-auto items-center">
        <div className="flex justify-between items-center">
          <h4 className="text-lg text-gray-700">Start a new document</h4>
          <div className="flex items-center justify-between">
            <Button
              variant={"outlined"}
              color="gray"
              ripple={true}
              className="hidden md:inline-flex shadow-none p-2 font-medium text-gray-700 border-none"
            >
              Template Gallery
            </Button>
            <Button
              variant={"outlined"}
              color="gray"
              ripple={true}
              className="hidden md:inline-flex p-3 text-lg shadow-none rounded-full border-none"
              size="lg"
            >
              <CgArrowsV className="font-bold text-2xl" />
            </Button>
            <Button
              variant={"outlined"}
              color="gray"
              ripple={true}
              className="p-3 text-lg shadow-none rounded-full border-none"
              size="lg"
            >
              <HiOutlineDotsVertical className="font-bold text-2xl" />
            </Button>
          </div>
        </div>
        <div>
          <img
            onClick={() => {
              setIsOpen(true);
            }}
            src="https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png"
            alt="create new docs"
            className="cursor-pointer border-white hover:border-blue-700 border-2 h-40 w-30"
            loading="lazy"
          />
        </div>
        <div>Blank</div>
        {isOpen && (
          <Modal
            handleOpen={setIsOpen}
            isOpen={isOpen}
            size={width > 768 ? "sm" : width > 480 ? "xl" : "xl"}
          />
        )}
      </div>
    </section>
  );
};

export default NewDocs;
