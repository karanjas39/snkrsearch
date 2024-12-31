import Image from "next/image";
import SignInImage from "@/public/signup.jpg";
import SignUp from "@/components/signup";

function SignupPage() {
  return (
    <div className="md:w-[70%] w-[90%] mx-auto my-6 grid md:grid-cols-2 grid-cols-1  items-stretch justify-stretch">
      <Image
        src={SignInImage}
        alt="SignIn Image"
        className="rounded-tl-3xl rounded-bl-3xl md:block hidden"
      />
      <SignUp />
    </div>
  );
}

export default SignupPage;
