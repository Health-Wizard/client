//import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Dashboard } from "@modules/Dashboard";
import { Onboarding } from "@modules/Onboarding";
import { Signup } from "@modules/Signup";
import { Signin } from "@modules/Signin";
import { Employees } from "@modules/Employees";
import { CalendarView } from "@modules/CalendarView/CalendarView";
import { Departments } from "@modules/Departments";
import { Doctors } from "@modules/Doctors";
import { HelpCenter } from "@modules/HelpCenter";
import { Settings } from "@modules/Settings";
import { StaffSchedule } from "@modules/StaffSchedule";
import { Stock } from "@modules/Stock";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className=" h-screen bg-bodyBg   ">
        <Toaster position="top-right" reverseOrder={false} />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/hr" element={<div>hhh</div>} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/staffschedule" element={<StaffSchedule />} />
          <Route path="/stock" element={<Stock />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
