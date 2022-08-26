import { AiFillFolder } from "react-icons/ai";
import DocsListRow from "../docs-list-row";
interface IDocsList {
  docs: any;
}
const DocsList = ({ docs }: IDocsList) => {
  return (
    <div className="p-3 md:p-0 lg:p-0 max-w-3xl mx-auto items-center">
      <div className="flex justify-between pt-5">
        <h4 className="text-lg text-gray-700">My Documents</h4>
        <div className="flex items-center justify-end gap-2">
          <h4 className="text-lg text-gray-700">Created date</h4>
          <AiFillFolder className="text-3xl text-gray-600" />
        </div>
      </div>
      {docs.map((doc: any) => (
        <DocsListRow
          key={doc.id}
          doc={{
            id: doc.id,
            ...doc.data(),
            timestamp: doc.data().timestamp?.toDate()?.toDateString(),
            lastUpdated: doc.data().lastUpdated?.toDate()?.toDateString(),
          }}
        />
      ))}
    </div>
  );
};

export default DocsList;
