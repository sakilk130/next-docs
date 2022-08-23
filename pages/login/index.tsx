import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { signIn } from "next-auth/client";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Image
        src="/images/docs.png"
        height="300"
        width="300"
        alt="google docs with nextjs"
      />

      <Button
        variant={"filled"}
        color="blue"
        ripple={true}
        className="px-6 py-2 mt-4 font-medium text-white bg-blue-500 border-none text-sm"
        onClick={() => signIn()}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
