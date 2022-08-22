import { AiFillFolder } from "react-icons/ai";
import DocsListRow from "../docs-list-row";

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
      <DocsListRow />
      <DocsListRow />
      <DocsListRow />
    </div>
  );
};

export default DocsList;
