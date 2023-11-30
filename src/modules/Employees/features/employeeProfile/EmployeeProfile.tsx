import Activities from "@modules/Employees/components/Activities/Activities";
import Burnout from "@modules/Employees/components/Burnout/Burnout";
import EmployeeDetail from "@modules/Employees/components/EmployeeDetail/EmployeeDetail";
import Histories from "@modules/Employees/components/Histories/Histories";
import Reports from "@modules/Employees/components/Reports/Reports";

export const EmployeeProfile = () => {
  return (
    <>
      <div className="h-[15%] flex justify-between items-center">
        <h2 className="text-xl font-semibold">Employee - Mary Weather</h2>
      </div>

      <div className="h-[85%] flex flex-col gap-3">
        <div className="h-[30%] ">
          <EmployeeDetail />
        </div>
        <div className="h-[70%] flex gap-10 ">
          <div className="w-[30%] ">
            <Histories />
          </div>
          <div className="w-[55%]  flex flex-col gap-4">
            <Burnout />
            <Reports />
          </div>
          <div className="w-[15%] ">
            <Activities />
          </div>
        </div>
      </div>
    </>
  );
};
