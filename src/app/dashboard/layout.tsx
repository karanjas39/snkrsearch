import DashboardNavbar from "@/components/dashboard/dashboard-navbar";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[calc(100vh-85px)] mt-4">
      <Card className="h-full flex flex-col lg:flex-row sm:w-[98%] w-[95%] mx-auto relative">
        <DashboardNavbar />
        <ScrollArea className="flex-1 h-full">
          <main className="p-6">{children}</main>
        </ScrollArea>
      </Card>
    </div>
  );
}