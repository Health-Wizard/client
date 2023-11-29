import Layout from "@modules/Shared/layout/Layout";
import { EmployeeList } from "./features/employeeList";
import { EmployeeProfile } from "./features/employeeProfile";

export const Employees = () => {
  return (
    <Layout>
      <div className="h-full w-full ">
        {/* <EmployeeList /> */}
        <EmployeeProfile />
      </div>
    </Layout>
  );
};
