import { Button } from "@material-tailwind/react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdDescription } from "react-icons/md";

const DocsListRow = () => {
  return (
    <div className="flex justify-between items-center pt-3 hover:bg-slate-300 hover:rounded-3xl hover:cursor-pointer p-2 hover:bg-blue-gray-100">
      <div className="flex gap-2">
        <MdDescription className="text-3xl text-blue-600" />
        <h4 className="text-lg text-gray-700">Dummy Docs </h4>
      </div>
      <div className="flex gap-2 items-center">
        <h4>22/22/2022</h4>
        <Button
          variant={"outlined"}
          color="gray"
          ripple={true}
          className="p-2 text-lg shadow-none rounded-full border-none"
          size="lg"
        >
          <HiOutlineDotsVertical className="font-bold text-2xl" />
        </Button>
      </div>
    </div>
  );
};

export default DocsListRow;
