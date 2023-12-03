import Layout from "@modules/Shared/layout/Layout";
import EmployeeDashboard from "./pages/employeeDashboard/EmployeeDashboard";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import { useQuery } from "react-query";
import { getRole } from "@modules/Shared/services/apis/employee";
import LoadingIcons from "react-loading-icons";

const fetchUserRole = async () => {
  const data = await getRole();
  //console.log(data);
  return data;
};
export const Dashboard = () => {
  const { data, isLoading } = useQuery("userRole", fetchUserRole);

  return (
    <Layout>
      <div className="h-full w-full ">
        {isLoading && (
          <div className="h-[90%] flex items-center justify-center ">
            <LoadingIcons.Oval
              stroke="#000000"
              strokeOpacity={0.5}
              speed={0.75}
            />
          </div>
        )}
        {data && !isLoading && data.role == "employee" && !isLoading && (
          <EmployeeDashboard />
        )}
        {data && !isLoading && data.role == "admin" && !isLoading && (
          <AdminDashboard />
        )}
      </div>
    </Layout>
  );
};
