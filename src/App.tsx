//import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Dashboard } from "@modules/Dashboard";
import { Onboarding } from "@modules/Onboarding";

const queryClient = new QueryClient();

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className=" h-screen bg-bodyBg   ">
        <Toaster position="top-right" reverseOrder={false} />
        
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;