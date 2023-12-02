import Layout from "@modules/Shared/layout/Layout";
import { EmployeeList } from "./features/employeeList";
import { EmployeeProfile } from "./features/employeeProfile";
import AddEmployee from "./components/AddEmployee/AddEmployee";

export const Employees = () => {
  return (
    <Layout>
      <div className="h-full w-full relative px-3 ">
        <EmployeeList />
        {/* <EmployeeProfile /> */}
        {/* <AddEmployee /> */}
      </div>
    </Layout>
  );
};
