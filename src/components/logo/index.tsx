import { Search } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Search className="w-8 h-8 text-primary" />
      <p className="font-bold text-2xl">SnkrSearch</p>
    </div>
  );
}

export default Logo;
