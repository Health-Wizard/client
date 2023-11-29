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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className=" h-screen bg-bodyBg   ">
        <Toaster position="top-right" reverseOrder={false} />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Signin/>} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
