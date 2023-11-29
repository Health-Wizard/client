import Layout from "@modules/Shared/layout/Layout";
import { EmployeeList } from "./features/employeeList";

export const Employees = () => {
  return (
    <Layout>
      <div className="h-full w-full ">
        <EmployeeList />
      </div>
    </Layout>
  );
};
