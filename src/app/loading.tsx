import Image from "next/image";
import LoaderSVG from "@/public/loader.svg";

function DashboardLoader({ width = 50 }: { width?: number }) {
  return (
    <div className="w-full flex items-center justify-center">
      <Image src={LoaderSVG} alt="Loader Image" width={width} />
    </div>
  );
}

export default DashboardLoader;
