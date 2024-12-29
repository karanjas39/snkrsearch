import { cn } from "@/lib/utils";

const DividerHeading = ({
  text,
  classes,
}: {
  text: string;
  classes?: string;
}) => {
  return (
    <div className={cn("w-full flex items-center", classes)}>
      <div className="flex-grow h-0.5 bg-gray-300"></div>
      <h4 className="mx-2 text-xs font-medium text-gray-500">{text}</h4>
      <div className="flex-grow h-0.5 bg-gray-300"></div>
    </div>
  );
};

export default DividerHeading;
