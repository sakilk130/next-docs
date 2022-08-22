import { AiFillFolder } from "react-icons/ai";
import { MdDescription } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";

const DocsList = () => {
  return (
    <div className="p-3 md:p-0 lg:p-0 max-w-3xl mx-auto items-center">
      <div className="flex justify-between pt-5">
        <h4 className="text-lg text-gray-700">My Documents</h4>
        <div className="flex items-center justify-end gap-2">
          <h4 className="text-lg text-gray-700">Created date</h4>
          <AiFillFolder className="text-3xl text-gray-600" />
        </div>
      </div>
      <div className="flex justify-between items-center pt-3">
        <div className="flex gap-2">
          <MdDescription className="text-3xl text-blue-600" />
          <h4 className="text-lg text-gray-700">Dummy Docs </h4>
        </div>
        <div className="flex gap-2">
          <h4>22/22/2022</h4>
          <BiDotsVerticalRounded className="text-3xl text-gray-600" />
        </div>
      </div>
      <div className="flex justify-between items-center pt-3">
        <div className="flex gap-2">
          <MdDescription className="text-3xl text-blue-600" />
          <h4 className="text-lg text-gray-700">Dummy Docs </h4>
        </div>
        <div className="flex gap-2">
          <h4>22/22/2022</h4>
          <BiDotsVerticalRounded className="text-3xl text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default DocsList;
