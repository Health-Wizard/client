import { IoChatbubblesOutline } from "react-icons/io5";
import { PiUsers } from "react-icons/pi";
import profile from "@assets/images/profile.jpeg";

export default function Notifications() {
  return (
    <div className="h-full bg-blue_shade_1 rounded-xl p-2">
      <h2 className="text-sm font-semibold h-[10%] ">Notification</h2>
      <div className="h-[90%] flex flex-col gap-2">
        <div className="h-[25%] flex items-center bg-white rounded-xl gap-10 px-2">
          <div className=" w-[10%] ">
            <div className="h-10 w-10 bg-blue_shade_1 rounded-full flex items-center justify-center text-purple-500">
              <IoChatbubblesOutline size={20} />
            </div>
          </div>
          <div className="h-full flex flex-col justify-center w-[90%]">
            <div className=" text-xs  text-text_gray">
              you have 28 appointment requests
            </div>
          </div>
        </div>

        <div className="h-[25%] flex items-center bg-white rounded-xl gap-10 px-2">
          <div className=" w-[10%] ">
            <div className="h-10 w-10 bg-blue_shade_1 rounded-full flex items-center justify-center text-cyan-500">
              <img src={profile} className="h-8 w-8 rounded-full" alt="" />
            </div>
          </div>
          <div className="h-full flex flex-col justify-center w-[90%]">
            <div className=" text-xs  text-text_gray">
              Your vacation request was denied.
            </div>
          </div>
        </div>
        <div className="h-[25%] flex items-center bg-white rounded-xl gap-10 px-2">
          <div className=" w-[10%] ">
            <div className="h-10 w-10 bg-blue_shade_1 rounded-full flex items-center justify-center text-cyan-500">
              <img src={profile} className="h-8 w-8 rounded-full" alt="" />
            </div>
          </div>
          <div className="h-full flex flex-col justify-center w-[90%]">
            <div className=" text-xs  text-text_gray">
              Tom Daley cancelled his appointment.
            </div>
          </div>
        </div>

        <div className="h-[25%] flex items-center bg-white rounded-xl gap-10 px-2">
          <div className=" w-[10%] ">
            <div className="h-10 w-10 bg-blue_shade_1 rounded-full flex items-center justify-center text-cyan-500">
              <PiUsers size={20} />
            </div>
          </div>
          <div className="h-full flex flex-col justify-center w-[90%]">
            <div className=" text-xs  text-text_gray">
              Someone wants to join in.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
