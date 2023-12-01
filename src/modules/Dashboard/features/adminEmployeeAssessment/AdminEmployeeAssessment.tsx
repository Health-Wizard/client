import profile from "@assets/images/profile.jpeg";
import { FaCheck } from "react-icons/fa6";

export default function AdminEmployeeAssessment() {
  return (
    <div className="h-full flex flex-col gap-3 ">
      <h2 className="text-sm font-semibold h-[5%] ">Assessment</h2>
      <div className="h-[95%] bg-white rounded-xl flex flex-col gap-1">
        <div className="h-[90%] w-full  text-md py-2 px-10">
          <div className="h-[25%] grid grid-cols-3 justify-center items-center font-semibold border-b-2 border-border_gray">
            <div className="  ">Profile</div>
            <div className=" ">UserName</div>
            <div className="">Status</div>
          </div>
          <div className="h-[25%] grid grid-cols-3 justify-center items-center  border-b border-border_gray">
            <div className="  ">
              <img src={profile} className="h-8 w-8 rounded-full" alt="" />
            </div>
            <div className=" ">Maria</div>
            <div className=" ">
              <div className="w-[20%] h-[80%] border-2 border-black rounded-md flex items-center justify-center ">
                <FaCheck size={20} />
              </div>
            </div>
          </div>
          <div className="h-[25%] grid grid-cols-3 justify-center items-center  border-b border-border_gray">
            <div className="  ">
              <img src={profile} className="h-8 w-8 rounded-full" alt="" />
            </div>
            <div className=" ">Harry</div>
            <div className=" ">
              <div className="w-[20%] h-[80%] border-2 border-black rounded-md flex items-center justify-center ">
                <FaCheck size={20} />
              </div>
            </div>
          </div>
          <div className="h-[25%] grid grid-cols-3 justify-center items-center  border-b border-border_gray">
            <div className="  ">
              <img src={profile} className="h-8 w-8 rounded-full" alt="" />
            </div>
            <div className=" ">Ayush</div>
            <div className=" ">
              <div className="w-[20%] h-[80%] border-2 border-black rounded-md flex items-center justify-center ">
                <FaCheck size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[10%]"></div>
      </div>
    </div>
  );
}
