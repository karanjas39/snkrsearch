import AuthProvider from "@/components/providers/auth-provider";

function DashboardPage({ children }: Readonly<{ children: React.ReactNode }>) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default DashboardPage;
