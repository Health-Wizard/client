import EmployeeActions from "@modules/Dashboard/components/EmployeeActions/EmployeeActions";
import EmployeeMonitor from "@modules/Dashboard/components/EmployeeMonitor/EmployeeMonitor";
import EmployeeReportCards from "@modules/Dashboard/components/EmployeeReportCards/EmployeeReportCards";
import EmployeeWelcome from "@modules/Dashboard/components/EmployeeWelcome/EmployeeWelcome";
import SleepMonitor from "@modules/Dashboard/components/SleepMonitor/SleepMonitor";
import Profile from "@modules/Dashboard/features/profile/Profile";
import { getSingleEmployee } from "@modules/Shared/services/apis/employee";
import { useEmployeeStore } from "@modules/Shared/store/employeeStore";
import { useAuthStore } from "@modules/Shared/store/userStore";

import { useQuery } from "react-query";

const fetchEmployee = async (empId: number) => {
  const data = await getSingleEmployee(empId);
  return data;
};

export default function EmployeeDashboard() {
  const { user } = useAuthStore();
  const { setEmployee } = useEmployeeStore();
  const { isLoading } = useQuery(
    //@ts-ignore
    ["employee", user.empId],
    () =>
      //@ts-ignore
      fetchEmployee(user.empId),
    {
      onSuccess: (data) => {
        // Perform actions on successful fetch
        setEmployee(data.employee);
        // You can do more here, such as dispatching actions or updating local state
      },
    }
  );

  return (
    <div className="w-full h-full flex gap-6 ">
      <div className="h-full w-[80%] flex flex-col gap-3">
        <div className="h-[20%] ">
          <EmployeeWelcome />
        </div>
        <div className="h-[20%] ">
          <EmployeeReportCards />
        </div>
        <div className="h-[60%] flex gap-3">
          <div className="h-full w-[80%] ">
            <EmployeeMonitor />
          </div>
          <div className="h-full w-[20%] bg-bg_gray rounded-xl">
            <SleepMonitor />
          </div>
        </div>
      </div>
      <div className="h-full w-[20%] bg-blue_shade_1 px-2 py-4 flex flex-col gap-4">
        <div className="h-[40%] ">
          <Profile />
        </div>
        <div className="h-[10%] grid grid-cols-5  py-1 ">
          <div className=" h-full border-r-2 border-border_gray px-1 py-1">
            <div className="h-full flex flex-col justify-center items-center  text-primary ">
              <p className="font-semibold text-center text-xs">27</p>
              <p className="text-xs">Mon</p>
            </div>
          </div>
          <div className=" h-full border-r-2 border-border_gray px-1 py-1">
            <div className="h-full flex flex-col justify-center items-center  text-primary ">
              <p className="font-semibold text-center text-xs">28</p>
              <p className="text-xs">Tue</p>
            </div>
          </div>
          <div className=" h-full border-r-2 border-border_gray px-1 py-1">
            <div className="h-full flex flex-col justify-center items-center  bg-primary text-white rounded-xl  ">
              <p className="font-semibold text-center text-xs">27</p>
              <p className="text-xs">Wed</p>
            </div>
          </div>
          <div className=" h-full border-r-2 border-border_gray px-1 py-1">
            <div className="h-full flex flex-col justify-center items-center  text-primary ">
              <p className="font-semibold text-center text-xs">30</p>
              <p className="text-xs">Thur</p>
            </div>
          </div>
          <div className=" h-full px-1 py-1">
            <div className="h-full flex flex-col justify-center items-center  text-primary ">
              <p className="font-semibold text-center text-xs">31</p>
              <p className="text-xs">Fri</p>
            </div>
          </div>
        </div>
        <div className="h-[50%] ">
          <EmployeeActions />
        </div>
      </div>
    </div>
  );
}
