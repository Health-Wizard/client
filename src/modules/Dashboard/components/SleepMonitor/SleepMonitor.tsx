import { MdOutlineNotificationsPaused } from "react-icons/md";
import { FaBed } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";

export default function SleepMonitor() {
  return (
    <div className="h-full px-3 text-primary py-3 flex flex-col gap-4">
      <h3 className="font-semibold">Sleep Tracking</h3>
      <div className="h-[20%] flex items-center border-b gap-10">
        <div className=" w-[10%] ">
          <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white">
            <FaBed size={20} />
          </div>
        </div>
        <div className="h-full flex flex-col justify-center w-[90%]">
          <div className=" text-xs font-semibold">REM Sleep</div>
          <div className=" text-xs font-semibold ">22%</div>
        </div>
      </div>
      <div className="h-[20%] flex items-center border-b gap-10">
        <div className=" w-[10%] ">
          <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white">
            <MdOutlineNotificationsPaused size={20} />
          </div>
        </div>
        <div className="h-full flex flex-col justify-center w-[90%]">
          <div className=" text-xs font-semibold">Deep Sleep</div>
          <div className=" text-xs font-semibold ">52%</div>
        </div>
      </div>
      <div className="h-[20%] flex items-center border-b gap-10">
        <div className=" w-[10%] ">
          <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white">
            <LuEye size={20} />
          </div>
        </div>
        <div className="h-full flex flex-col justify-center w-[90%]">
          <div className=" text-xs font-semibold">Light Sleep</div>
          <div className=" text-xs font-semibold ">16%</div>
        </div>
      </div>
    </div>
  );
}
