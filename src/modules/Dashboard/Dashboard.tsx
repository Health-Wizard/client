import Layout from "@modules/Shared/layout/Layout";
import EmployeeDashboard from "./pages/employeeDashboard/EmployeeDashboard";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";

export const Dashboard = () => {
  return (
    <Layout>
      <div className="h-full w-full ">
        {/* <EmployeeDashboard /> */}
        <AdminDashboard />
      </div>
    </Layout>
  );
};
