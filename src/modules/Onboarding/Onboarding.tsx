import { useState } from "react";
import { CompanyDetail } from "./features/companyDetail";
import { PersonalDetail } from "./features/personalDetail";

export const Onboarding = () => {
  const [page, setPage] = useState<boolean>(false);
  return (
    <div className="h-screen w-full flex ">
      <div className="w-2/3 p-4">
        <div className="h-[15%] text-primary">
          <h1 className="font-bold text-2xl ">MindSync </h1>
        </div>
        <div className="h-[85%]  flex items-center justify-center">
          {/* features */}
          {!page && <PersonalDetail setPage={setPage} />}
          {page && <CompanyDetail />}
        </div>
      </div>
      <div className="h-full w-1/3 bg-primary text-white flex  flex-col  gap-10 items-center justify-center">
        <img
          src="https://assets.api.uizard.io/api/cdn/stream/d80c40da-99a6-460b-b3c2-75e0e6bbe72d.png"
          className="h-40 w-40"
        />
        <div>
          <p className="text-sm text-center px-10">
            Join thousands of satisfied users who have transformed their health
            routines with MediTrack\'s intuitive interface, comprehensive data
            analysis, and actionable recommendations.',
          </p>
        </div>
      </div>
    </div>
  );
};
