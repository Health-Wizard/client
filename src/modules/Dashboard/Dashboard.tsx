import Layout from "@modules/Shared/layout/Layout";
import Admin from "@modules/Admin/Admin";
import EmployeeDashboard from "./pages/employeeDashboard/EmployeeDashboard";

export const Dashboard = () => {
  return (
    <Layout>
      <div className="h-full w-full ">
        <EmployeeDashboard />
        {/* <Admin /> */}
      </div>
    </Layout>
  );
};
