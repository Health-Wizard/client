import { PiUsers } from "react-icons/pi";
import { FaRegStar, FaRegFaceLaughSquint } from "react-icons/fa6";
import { TbChartHistogram } from "react-icons/tb";
import { useQuery } from "react-query";
import { fetchAnalytics } from "@modules/Dashboard/utils/DashboardUtils";

export default function CompanyReportCards() {
  const { isLoading, data } = useQuery(
    //@ts-ignore
    ["analytics"],
    () =>
      //@ts-ignore
      fetchAnalytics()
  );

  return (
    <div className="h-[30%] grid grid-cols-4 gap-3">
      <div className="h-full bg-white rounded-xl flex items-center gap-3">
        <div className="w-[30%] h-full flex items-center text-cyan-600 justify-center">
          <PiUsers size={30} />
        </div>
        <div className="w-[70%] flex flex-col  gap-1 ">
          <div className="text-xl font-semibold">78</div>
          <div className="text-xs text-text_gray">Employees</div>
        </div>
      </div>
      <div className="h-full bg-white rounded-xl flex items-center gap-3">
        <div className="w-[30%] h-full flex items-center text-blue-600 justify-center">
          <FaRegStar size={30} />
        </div>
        <div className="w-[70%] flex flex-col  gap-1 ">
          <div className="text-xl font-semibold">
            {data ? data.data[1].data[0].toFixed(2) : ""}
          </div>
          <div className="text-xs text-text_gray">Stress</div>
        </div>
      </div>
      <div className="h-full bg-white rounded-xl flex items-center gap-3">
        <div className="w-[30%] h-full flex items-center text-purple-500 justify-center">
          <FaRegFaceLaughSquint size={30} />
        </div>
        <div className="w-[70%] flex flex-col  gap-1 ">
          <div className="text-xl font-semibold">
            {data ? data.data[0].data[0].toFixed(2) : ""}
          </div>
          <div className="text-xs text-text_gray">Happiness Index</div>
        </div>
      </div>
      <div className="h-full bg-white rounded-xl flex items-center gap-3">
        <div className="w-[30%] h-full flex items-center text-blue-600 justify-center">
          <TbChartHistogram size={30} />
        </div>
        <div className="w-[70%] flex flex-col  gap-1 ">
          <div className="text-xl font-semibold">1</div>
          <div className="text-xs text-text_gray">Job Satisfaction</div>
        </div>
      </div>
    </div>
  );
}
