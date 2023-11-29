import { MdAdd } from "react-icons/md";
import profile from "@assets/images/profile.jpeg";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import { LuTrash } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const EmployeeList = () => {
  return (
    <>
      <div className="h-[15%]  flex justify-between items-center">
        <h2 className="text-xl font-semibold">Employees directory</h2>
        <button className=" bg-primary text-white font-semibold flex items-center px-3 h-10 rounded-md">
          <MdAdd size={20} />
          add new employee
        </button>
      </div>

      <div className="h-[85%]  ">
        <div className="h-[90%] border border-border_gray grid grid-cols-4 rounded-xl ">
          <div className="border-r  border-border_gray ">
            <div className="h-[60%] flex items-center justify-center">
              <img src={profile} className="h-20 w-20 rounded-full" alt="" />
            </div>
            <div className="h-[10%] text-center">Duncan Pit</div>
            <div className="h-[10%] text-center text-text_gray text-xs">
              A6S9T2D0P5
            </div>
            <div className="h-[20%] flex justify-center text-primary space-x-3">
              <LuTrash size={20} className="cursor-pointer" />
              <PiPencilSimpleLineBold size={20} className="cursor-pointer" />
            </div>
          </div>
          <div className="border-r  border-border_gray ">
            <div className="h-[60%] flex items-center justify-center">
              <img src={profile} className="h-20 w-20 rounded-full" alt="" />
            </div>
            <div className="h-[10%] text-center">Duncan Pit</div>
            <div className="h-[10%] text-center text-text_gray text-xs">
              A6S9T2D0P5
            </div>
            <div className="h-[20%] flex justify-center text-primary space-x-3">
              <LuTrash size={20} className="cursor-pointer" />
              <PiPencilSimpleLineBold size={20} className="cursor-pointer" />
            </div>
          </div>
          <div className="border-r  border-border_gray ">
            <div className="h-[60%] flex items-center justify-center">
              <img src={profile} className="h-20 w-20 rounded-full" alt="" />
            </div>
            <div className="h-[10%] text-center">Duncan Pit</div>
            <div className="h-[10%] text-center text-text_gray text-xs">
              A6S9T2D0P5
            </div>
            <div className="h-[20%] flex justify-center text-primary space-x-3">
              <LuTrash size={20} className="cursor-pointer" />
              <PiPencilSimpleLineBold size={20} className="cursor-pointer" />
            </div>
          </div>
          <div className="  ">
            <div className="h-[60%] flex items-center justify-center">
              <img src={profile} className="h-20 w-20 rounded-full" alt="" />
            </div>
            <div className="h-[10%] text-center">Duncan Pit</div>
            <div className="h-[10%] text-center text-text_gray text-xs">
              A6S9T2D0P5
            </div>
            <div className="h-[20%] flex justify-center text-primary space-x-3">
              <LuTrash size={20} className="cursor-pointer" />
              <PiPencilSimpleLineBold size={20} className="cursor-pointer" />
            </div>
          </div>
          <div className="border-r border-t border-border_gray ">
            <div className="h-[60%] flex items-center justify-center">
              <img src={profile} className="h-20 w-20 rounded-full" alt="" />
            </div>
            <div className="h-[10%] text-center">Duncan Pit</div>
            <div className="h-[10%] text-center text-text_gray text-xs">
              A6S9T2D0P5
            </div>
            <div className="h-[20%] flex justify-center text-primary space-x-3">
              <LuTrash size={20} className="cursor-pointer" />
              <PiPencilSimpleLineBold size={20} className="cursor-pointer" />
            </div>
          </div>
          <div className="border-r border-t border-border_gray ">
            <div className="h-[60%] flex items-center justify-center">
              <img src={profile} className="h-20 w-20 rounded-full" alt="" />
            </div>
            <div className="h-[10%] text-center">Duncan Pit</div>
            <div className="h-[10%] text-center text-text_gray text-xs">
              A6S9T2D0P5
            </div>
            <div className="h-[20%] flex justify-center text-primary space-x-3">
              <LuTrash size={20} className="cursor-pointer" />
              <PiPencilSimpleLineBold size={20} className="cursor-pointer" />
            </div>
          </div>
          <div className="border-r border-t border-border_gray ">
            <div className="h-[60%] flex items-center justify-center">
              <img src={profile} className="h-20 w-20 rounded-full" alt="" />
            </div>
            <div className="h-[10%] text-center">Duncan Pit</div>
            <div className="h-[10%] text-center text-text_gray text-xs">
              A6S9T2D0P5
            </div>
            <div className="h-[20%] flex justify-center text-primary space-x-3">
              <LuTrash size={20} className="cursor-pointer" />
              <PiPencilSimpleLineBold size={20} className="cursor-pointer" />
            </div>
          </div>
          <div className=" border-t border-border_gray ">
            <div className="h-[60%] flex items-center justify-center">
              <img src={profile} className="h-20 w-20 rounded-full" alt="" />
            </div>
            <div className="h-[10%] text-center">Duncan Pit</div>
            <div className="h-[10%] text-center text-text_gray text-xs">
              A6S9T2D0P5
            </div>
            <div className="h-[20%] flex justify-center text-primary space-x-3">
              <LuTrash size={20} className="cursor-pointer" />
              <PiPencilSimpleLineBold size={20} className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="h-[10%]  flex justify-center items-center space-x-4">
          <div className="border border-border_gray rounded-md flex items-center justify-center text-text_gray  h-6 w-6 cursor-pointer hover:bg-primary hover:text-white">
            <FaChevronLeft size={10} />
          </div>
          <div className=" rounded-md flex items-center justify-center text-text_gray  h-6 w-6 cursor-pointer hover:bg-primary hover:text-white">
            1
          </div>
          <div className=" rounded-md flex items-center justify-center text-text_gray  h-6 w-6 cursor-pointer hover:bg-primary hover:text-white">
            2
          </div>
          <div className=" rounded-md flex items-center justify-center text-text_gray  h-6 w-6 cursor-pointer hover:bg-primary hover:text-white">
            3
          </div>
          <div className=" rounded-md flex items-center justify-center text-text_gray  h-6 w-6 cursor-pointer hover:bg-primary hover:text-white">
            4
          </div>
          <div className="border border-border_gray rounded-md flex items-center justify-center text-text_gray  h-6 w-6 cursor-pointer hover:bg-primary hover:text-white">
            <FaChevronRight size={10} />
          </div>
        </div>
      </div>
    </>
  );
};
