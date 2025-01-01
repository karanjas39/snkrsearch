import AuthProvider from "@/components/providers/auth-provider";
import Dashboard from "@/components/dashboard";

function DashboardPage() {
  return (
    <AuthProvider>
      <Dashboard />
    </AuthProvider>
  );
}

export default DashboardPage;
