import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { signOut, useSession } from "next-auth/client";
import Image from "next/image";
import { BsPeopleFill } from "react-icons/bs";
import { MdDescription } from "react-icons/md";
interface IDocHeader {
  docTitle: string;
  loading?: boolean;
  isSaved?: string;
}
const DocHeader = ({ docTitle, loading = false, isSaved }: IDocHeader) => {
  const [session]: any = useSession();

  return (
    <div className="sm:gap-2 md:gap-5 lg:gap-20 flex justify-between shadow-md p-3 bg-white">
      <div className="flex items-center gap-2">
        <MdDescription className=" text-blue-500 text-3xl" />{" "}
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-lg font-bold">
              {loading ? "Loading..." : docTitle}
            </h4>
            <h4>{isSaved}</h4>
          </div>
          <ul className=" gap-3 hidden md:flex lg:flex">
            <li className="docHeaderOption">
              <a href="#">File</a>
            </li>
            <li className="docHeaderOption">
              <a href="#">Edit</a>
            </li>
            <li className="docHeaderOption">
              <a href="#">View</a>
            </li>
            <li className="docHeaderOption">
              <a href="#">Insert</a>
            </li>
            <li className="docHeaderOption">
              <a href="#">Format</a>
            </li>
            <li className="docHeaderOption">
              <a href="#">Tools</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center pl-3 gap-2">
        <Button className="flex gap-1 items-center">
          <BsPeopleFill className="text-lg" />
          Share
        </Button>
        <div className="h-12 w-12 flex items-center">
          <Menu>
            <MenuHandler>
              <button>
                <Image
                  src={session ? session?.user?.image : "/images/demo.jpg"}
                  alt="profile"
                  width={40}
                  height={40}
                  className="items-center rounded-full cursor-pointer w-full h-full"
                />
              </button>
            </MenuHandler>
            <MenuList>
              <MenuItem
                className="text-center text-gray-600 "
                onClick={() => signOut()}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default DocHeader;
