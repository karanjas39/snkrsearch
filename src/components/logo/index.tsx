import Link from "next/link";
import { Anton } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1 cursor-pointer z-50">
      <p className={cn("text-xl sm:text-3xl text-white", font.className)}>
        SnkrSearch
      </p>
    </Link>
  );
}

export default Logo;
