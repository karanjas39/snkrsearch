import Logo from "../logo";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <nav className="px-4 py-2 flex items-center justify-between w-full fixed z-10 bg-transparent">
      <Logo />
      <div className="flex items-center gap-2">
        <Button>Login</Button>
      </div>
    </nav>
  );
}

export default Navbar;
