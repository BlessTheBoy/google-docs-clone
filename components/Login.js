import { signIn } from "next-auth/client";
import Button from "@material-tailwind/react/Button";
import Image from "next/image";
import logo from "../public/docsLogo.png"

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src={logo}
        width="550"
        height="300"
        objectFit="contain"
      />
      <Button
      className="w-44 mt-10"
        color="blue"
        buttonType="filled"
        ripple="light"
        onClick={signIn}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
