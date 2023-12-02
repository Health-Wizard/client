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
import { Link, useLocation, useNavigate } from "react-router-dom";

import profile from "@assets/images/profile.jpeg";
import { logout } from "../services/apis/authentication";
import { useAuthStore } from "../store/userStore";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const store = useAuthStore();

  const logoutUser = () => {
    logout();
    store.resetUser();
    navigate("/login");
  };

  //redirect user to log in is not authenticated
  useEffect(() => {
    if (Object.keys(store.user).length === 0) navigate("/login");
  }, []);

  return (
    <div className="h-screen w-full pt-3">
      {/* Header */}
      <div className="w-full h-[10%] flex  justify-between px-2">
        <div className="text-primary text-3xl font-bold ">
          <Link to="/">MindSync</Link>
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
        <div className="w-[15%] h-full bg-white flex-flex-col px-2">
          <div className="h-[33.3%] flex flex-col justify-start">
            <Link
              to="/"
              className={`h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 ${
                location.pathname == "/" ? "bg-primary text-white" : ""
              } hover:bg-primary hover:text-white`}
            >
              <div className="f-full w-[20%]  flex items-center">
                <LuLayoutDashboard size={20} className="" />
              </div>
              <div className="flex items-center text-sm font-semibold">
                Dashboard
              </div>
            </Link>
            <Link
              to="/calendar"
              className={`h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 ${
                location.pathname == "/calendar" ? "bg-primary text-white" : ""
              } hover:bg-primary hover:text-white`}
            >
              <div className="f-full w-[20%]  flex items-center">
                <IoCalendarOutline size={20} className="" />
              </div>
              <div className="flex items-center text-sm font-semibold">
                Calendar
              </div>
            </Link>

            <Link
              to="/employees"
              className={`h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 ${
                location.pathname == "/employees" ? "bg-primary text-white" : ""
              } hover:bg-primary hover:text-white`}
            >
              <div className="f-full w-[20%]  flex items-center">
                <TbUsers size={20} className="" />
              </div>
              <div className="flex items-center text-sm font-semibold">
                Employees
              </div>
            </Link>

            <Link
              to="/staffschedule"
              className={`h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 ${
                location.pathname == "/staffschedule"
                  ? "bg-primary text-white"
                  : ""
              } hover:bg-primary hover:text-white`}
            >
              <div className="f-full w-[20%]  flex items-center">
                <CiClock2 size={20} className="" />
              </div>
              <div className="flex items-center text-sm font-semibold">
                Staff Schedule
              </div>
            </Link>
          </div>
          <div className="h-[33.3%] flex flex-col justify-start">
            <Link
              to="/doctors"
              className={`h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 ${
                location.pathname == "/doctors" ? "bg-primary text-white" : ""
              } hover:bg-primary hover:text-white`}
            >
              <div className="f-full w-[20%]  flex items-center">
                <LuHeartHandshake size={20} className="" />
              </div>
              <div className="flex items-center text-sm font-semibold">
                Doctors
              </div>
            </Link>
            <Link
              to="/departments"
              className={`h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 ${
                location.pathname == "/departments"
                  ? "bg-primary text-white"
                  : ""
              } hover:bg-primary hover:text-white`}
            >
              <div className="f-full w-[20%]  flex items-center">
                <HiBuildingOffice2 size={20} className="" />
              </div>
              <div className="flex items-center text-sm font-semibold">
                Departments
              </div>
            </Link>
            <Link
              to="/stock"
              className={`h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 ${
                location.pathname == "/stock" ? "bg-primary text-white" : ""
              } hover:bg-primary hover:text-white`}
            >
              <div className="f-full w-[20%]  flex items-center">
                <FaBoxArchive size={20} className="" />
              </div>
              <div className="flex items-center text-sm font-semibold">
                Stock
              </div>
            </Link>
          </div>
          <div className="h-[33.3%] flex flex-col justify-end">
            <Link
              to="/settings"
              className={`h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 ${
                location.pathname == "/settings" ? "bg-primary text-white" : ""
              } hover:bg-primary hover:text-white`}
            >
              <div className="f-full w-[20%]  flex items-center">
                <MdOutlineSettings size={20} className="" />
              </div>
              <div className="flex items-center text-sm font-semibold">
                Settings
              </div>
            </Link>
            <Link
              to="/helpcenter"
              className={`h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 ${
                location.pathname == "/helpcenter"
                  ? "bg-primary text-white"
                  : ""
              } hover:bg-primary hover:text-white`}
            >
              <div className="f-full w-[20%]  flex items-center">
                <MdOutlineHelpCenter size={20} className="" />
              </div>
              <div className="flex items-center text-sm font-semibold">
                Help center
              </div>
            </Link>
            <div
              className={`h-[20%]  text-text_gray flex  cursor-pointer rounded-md w-full px-2 hover:bg-primary hover:text-white`}
            >
              <div className="f-full w-[20%]  flex items-center">
                <RxExit size={20} className="" />
              </div>
              <div
                className="flex items-center text-sm font-semibold"
                onClick={logoutUser}
              >
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
