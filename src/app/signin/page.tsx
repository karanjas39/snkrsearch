import Image from "next/legacy/image";
import SignInImage from "@/public/signin.jpg";
import SignIn from "@/components/signin";

function SignInPage() {
  return (
    <div className="md:w-[70%] w-[90%] mx-auto my-6 grid md:grid-cols-2 grid-cols-1">
      <SignIn />
      <Image
        src={SignInImage}
        alt="SignIn Image"
        className="rounded-tr-3xl rounded-br-3xl md:block hidden"
      />
    </div>
  );
}

export default SignInPage;
