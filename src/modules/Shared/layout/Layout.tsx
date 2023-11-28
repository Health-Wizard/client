import { IoMdArrowDropdown } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";
import { FaBoxArchive } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { TbUsers } from "react-icons/tb";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { LuHeartHandshake } from "react-icons/lu";
import { RxExit } from "react-icons/rx";
import { MdOutlineHelpCenter } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";

import profile from "@assets/images/profile.jpeg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full p-3">
      {/* Header */}
      <div className="w-full h-[10%] flex  justify-between">
        <div className="text-primary text-3xl font-bold">
          <h1>Intellicare</h1>
        </div>
        <div className="flex gap-x-4 h-full w-[50%] justify-end ">
          <div className="h-full w-[20%] max-w-[65px] max-h-[65px] rounded-full ">
            <img src={profile} className="h-full w-full rounded-full" alt="" />
          </div>
          <div className="w-[20%] max-w-[100px]  flex items-center justify-between">
            <p className="text-sm font-semibold"> Admin</p>
            <IoMdArrowDropdown size={15} />
          </div>
        </div>
      </div>

      <div className="h-[90%] flex">
        {/* Nav bar */}
        <div className="w-[15%] h-full bg-white flex-flex-col pr-2">
          <div className="h-[33.3%] flex flex-col justify-start">
            <div className="h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 hover:bg-primary hover:text-white">
              <div className="f-full w-[20%]  flex items-center">
                <LuLayoutDashboard size={20} className="" />
              </div>
              <div className="flex items-center text-sm font-semibold">
                Dashboard
              </div>
            </div>
            <div className="h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 hover:bg-primary hover:text-white">
              <div className="f-full w-[20%]  flex items-center">
                <IoCalendarOutline size={20} className="" />
              </div>
              <div className="flex items-center text-sm font-semibold">
                Calendar
              </div>
            </div>
            <div className="h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 hover:bg-primary hover:text-white">
              <div className="f-full w-[20%]  flex items-center">
                <TbUsers size={20} className="" />
              </div>
              <div className="flex items-center text-sm font-semibold">
                Employees
              </div>
            </div>
            <div className="h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 hover:bg-primary hover:text-white">
              <div className="f-full w-[20%]  flex items-center">
                <CiClock2 size={20} className="" />
              </div>
              <div className="flex items-center text-sm font-semibold">
                Staff Schedule
              </div>
            </div>
          </div>
          <div className="h-[33.3%] flex flex-col justify-start">
            <div className="h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 hover:bg-primary hover:text-white">
              <div className="f-full w-[20%]  flex items-center">
                <LuHeartHandshake size={20} className="" />
              </div>
              <div className="flex items-center text-sm font-semibold">
                Doctors
              </div>
            </div>
            <div className="h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 hover:bg-primary hover:text-white">
              <div className="f-full w-[20%]  flex items-center">
                <HiBuildingOffice2 size={20} className="" />
              </div>
              <div className="flex items-center text-sm font-semibold">
                Departments
              </div>
            </div>
            <div className="h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 hover:bg-primary hover:text-white">
              <div className="f-full w-[20%]  flex items-center">
                <FaBoxArchive size={20} className="" />
              </div>
              <div className="flex items-center text-sm font-semibold">
                Stock
              </div>
            </div>
          </div>
          <div className="h-[33.3%] flex flex-col justify-end">
            <div className="h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 hover:bg-primary hover:text-white">
              <div className="f-full w-[20%]  flex items-center">
                <MdOutlineSettings size={20} className="" />
              </div>
              <div className="flex items-center text-sm font-semibold">
                Settings
              </div>
            </div>
            <div className="h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 hover:bg-primary hover:text-white">
              <div className="f-full w-[20%]  flex items-center">
                <MdOutlineHelpCenter size={20} className="" />
              </div>
              <div className="flex items-center text-sm font-semibold">
                Help center
              </div>
            </div>
            <div className="h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 hover:bg-primary hover:text-white">
              <div className="f-full w-[20%]  flex items-center">
                <RxExit size={20} className="" />
              </div>
              <div className="flex items-center text-sm font-semibold">
                Log out
              </div>
            </div>
          </div>
        </div>
        {/* Main body */}
        <div className="w-[85%] h-full ">
          {/* container for all pages */}
          {children}
        </div>
      </div>
    </div>
  );
}
