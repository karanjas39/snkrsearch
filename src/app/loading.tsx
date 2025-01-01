import { Loader2Icon } from "lucide-react";

function DashboardLoader() {
  return (
    <div className="w-full flex items-center justify-center">
      Loading... <Loader2Icon className="animate-spin" />{" "}
    </div>
  );
}

export default DashboardLoader;
