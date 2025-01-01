import { Menu, Bell, Settings } from "lucide-react";

function DashboardShortcutMobile({
  setIsNavOpen,
  isNavOpen,
}: {
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isNavOpen: boolean;
}) {
  return (
    <div className="lg:hidden flex justify-between items-center p-4 border-b">
      <Menu size={24} onClick={() => setIsNavOpen(!isNavOpen)} />
      <div className="flex items-center gap-4">
        <Bell size={24} />
        <Settings size={24} />
      </div>
    </div>
  );
}

export default DashboardShortcutMobile;
