import DashboardNavbar from "@/components/dashboard/dashboard-navbar";
import AuthProvider from "@/components/providers/auth-provider";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <div className="h-[calc(100vh-85px)] mt-4">
        <Card className="h-full flex flex-col lg:flex-row sm:w-[95%] w-[98%] mx-auto relative">
          <DashboardNavbar />
          <ScrollArea className="flex-1 h-full">
            <main className="sm:p-6 p-3 w-full">{children}</main>
          </ScrollArea>
        </Card>
      </div>
    </AuthProvider>
  );
}
