import { HiOutlineFire } from "react-icons/hi2";
import { GrUserSettings } from "react-icons/gr";
import { BiHappyAlt } from "react-icons/bi";
import { useQuery } from "react-query";
import { fetchAnalytics } from "@modules/Dashboard/utils/DashboardUtils";

export default function EmployeeReportCards() {
  const { isLoading, data } = useQuery(["analytics"], () => fetchAnalytics());

  return (
    <div className="h-full grid grid-cols-3 gap-6">
      <div className="rounded-xl h-full bg-bg_gray text-primary  py-4">
        <div className="h-[33.3%] flex justify-center ">
          <HiOutlineFire size={25} />
        </div>
        <div className="h-[33.3%]">
          <p className="text-md font-semibold text-center">Burnout</p>
        </div>
        <div className="h-[33.3%]">
          <p className="text-md font-semibold text-center">27</p>
        </div>
      </div>
      <div className="rounded-xl h-full bg-bg_gray text-primary  py-4">
        <div className="h-[33.3%] flex justify-center ">
          <BiHappyAlt size={25} />
        </div>
        <div className="h-[33.3%] text-center">Happiness Index </div>
        <div className="h-[33.3%]">
          <p className="text-md font-semibold text-center">
            {data ? data.data[0].data[0].toFixed(2) : ""}
          </p>
        </div>
      </div>

      <div className="rounded-xl h-full bg-bg_gray text-primary  py-4">
        <div className="h-[33.3%] flex justify-center ">
          <GrUserSettings size={25} />
        </div>
        <div className="h-[33.3%]">
          <p className="text-md font-semibold text-center">Stress Level</p>
        </div>
        <div className="h-[33.3%]">
          <p className="text-md font-semibold text-center">
            {" "}
            {data ? data.data[1].data[0].toFixed(2) : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
