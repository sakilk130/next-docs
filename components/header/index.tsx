import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { signOut, useSession } from "next-auth/client";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { IoMdApps } from "react-icons/io";
import { MdDescription } from "react-icons/md";

const Header = () => {
  const [session]: any = useSession();

  return (
    <div className="sm:gap-2 md:gap-5 lg:gap-20 flex justify-between shadow-md p-3 bg-white">
      <div className="flex items-center">
        <Button
          variant={"outlined"}
          color="gray"
          ripple={true}
          className="p-3 text-lg shadow-none rounded-full border-none"
        >
          <AiOutlineMenu className="text-lg" />
        </Button>
        <button className="flex gap-3 items-center">
          <MdDescription className="hidden md:flex lg:flex text-blue-500 text-3xl" />{" "}
          <span className="text-xl text-gray-500 pr-2">Docs</span>
        </button>
      </div>
      <div className="w-full flex  gap-3 items-center bg-gray-200 rounded-lg p-3 focus-within:shadow-md focus-within:bg-white transition duration-500 ease-in-out ">
        <AiOutlineSearch className="text-lg hiddentext-gray-600" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full"
        />
      </div>
      <div className="flex items-center pl-3">
        <Button
          variant={"outlined"}
          color="gray"
          ripple={true}
          className="hidden md:flex lg:flex p-2 text-2xl shadow-none rounded-full border-none"
        >
          <IoMdApps />
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

export default Header;
