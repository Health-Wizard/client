import AdminEmployeeAssessment from "@modules/Dashboard/features/adminEmployeeAssessment/AdminEmployeeAssessment";
import AdminViewCompanyReport from "@modules/Dashboard/features/adminViewCompanyReport/AdminViewCompanyReport";
import CalendarFeature from "@modules/Dashboard/features/calendar/CalendarFeature";
import Notifications from "@modules/Dashboard/features/notifications/Notifications";

export default function AdminDashboard() {
  return (
    <div className="h-full">
      <div className="w-full h-full flex gap-6 ">
        <div className="h-full w-[80%] flex flex-col gap-3 bg-blue_shade_1 rounded-xl  p-3">
          <h2 className="text-xl font-semibold h-[5%] ">Daily Overview</h2>
          <div className="h-[55%] ">
            <AdminViewCompanyReport />
          </div>
          <div className="h-[40%] ">
            <AdminEmployeeAssessment />
          </div>
        </div>
        <div className="h-full w-[20%]  pr-1 flex flex-col gap-4">
          <div className="h-[50%]">
            <CalendarFeature />
          </div>
          <div className="h-[50%] ">
            <Notifications />
          </div>
        </div>
      </div>
    </div>
  );
}
