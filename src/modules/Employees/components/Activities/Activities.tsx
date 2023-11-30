import { FaBed } from "react-icons/fa6";
import { IoFootstepsSharp } from "react-icons/io5";
import { FaWeightScale } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";

export default function Activities() {
  return (
    <div className="rounded-xl bg-bg_gray h-full px-2">
      <div className="h-[20%] flex items-center border-b gap-10">
        <div className=" w-[10%] ">
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary">
            <FaBed size={20} />
          </div>
        </div>
        <div className="h-full flex flex-col justify-center w-[90%]">
          <div className=" text-xs font-semibold">Sleep</div>
          <div className=" text-xs font-semibold text-text_gray">
            avg. 7h 30 min
          </div>
        </div>
      </div>
      <div className="h-[20%] flex items-center border-b gap-10">
        <div className=" w-[10%] ">
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary">
            <IoFootstepsSharp size={20} />
          </div>
        </div>
        <div className="h-full flex flex-col justify-center w-[90%]">
          <div className=" text-xs font-semibold">Steps</div>
          <div className=" text-xs font-semibold text-text_gray">
            avg. 8,901
          </div>
        </div>
      </div>
      <div className="h-[20%] flex items-center border-b gap-10">
        <div className=" w-[10%] ">
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary">
            <FaWeightScale size={20} />
          </div>
        </div>
        <div className="h-full flex flex-col justify-center w-[90%]">
          <div className=" text-xs font-semibold">Weight</div>
          <div className=" text-xs font-semibold text-text_gray">63 kg</div>
        </div>
      </div>
      <div className="h-[20%] flex items-center border-b gap-10">
        <div className=" w-[10%] ">
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary">
            <FaFire size={20} />
          </div>
        </div>
        <div className="h-full flex flex-col justify-center w-[90%]">
          <div className=" text-xs font-semibold">Burn</div>
          <div className=" text-xs font-semibold text-text_gray">
            avg. 2,000 kcal
          </div>
        </div>
      </div>
      <div className="h-[20%] flex items-center  gap-10">
        <div className=" w-[10%] ">
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary">
            <FaDroplet size={20} />
          </div>
        </div>
        <div className="h-full flex flex-col justify-center w-[90%]">
          <div className=" text-xs font-semibold">Cycle</div>
          <div className=" text-xs font-semibold text-text_gray">regular</div>
        </div>
      </div>
    </div>
  );
}
