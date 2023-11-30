import { PiFlowerTulipThin } from "react-icons/pi";
import { GiLoveInjection } from "react-icons/gi";
import { GiMeditation } from "react-icons/gi";

export default function EmployeeActions() {
  return (
    <div
      className="h-full flex flex-col gap-2 text-primary border-t-2 py-3 border-border_gray
    "
    >
      <div className="h-[10%]">
        <h3 className="font-semibold">Upcoming</h3>
      </div>
      <div className="h-[20%] flex items-center  gap-5">
        <div className=" w-[10%] ">
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary">
            <PiFlowerTulipThin size={20} />
          </div>
        </div>
        <div className="h-full flex flex-col justify-center w-[90%]">
          <div className=" text-xs ">Pilates workout</div>
        </div>
      </div>
      <div className="h-[20%] flex items-center  gap-5">
        <div className=" w-[10%] ">
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary">
            <GiLoveInjection size={20} />
          </div>
        </div>
        <div className="h-full flex flex-col justify-center w-[90%]">
          <div className=" text-xs ">Dentist Appointment</div>
        </div>
      </div>
      <div className="h-[20%] flex items-center  gap-5">
        <div className=" w-[10%] ">
          <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary">
            <GiMeditation size={20} />
          </div>
        </div>
        <div className="h-full flex flex-col justify-center w-[90%]">
          <div className=" text-xs ">Good Sleep Mediatation</div>
        </div>
      </div>

      <div className="h-[30%] border-t-2 border- flex items-end">
        <button
          type="button"
          className="w-full py-2 text-sm text-white bg-primary rounded-md font-semibold"
        >
          Take the health test
        </button>
      </div>
    </div>
  );
}
