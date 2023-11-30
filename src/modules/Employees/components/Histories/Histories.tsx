import { FaChevronRight } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { IoMdFlower } from "react-icons/io";
import { FaPills } from "react-icons/fa";

export default function Histories() {
  return (
    <div className="h-full w-full flex flex-col gap-3">
      <div className="bg-bg_gray rounded-xl h-[50%] p-2">
        <div className="h-[10%]">
          <h3 className="text-sm font-semibold">Appointment history</h3>
        </div>
        <div className="h-[45%] flex items-center border-b gap-3">
          <div className=" w-[10%] ">
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary">
              <FaHeartPulse size={20} />
            </div>
          </div>
          <div className="h-full flex flex-col justify-center w-[80%]">
            <div className=" text-xs font-semibold">Histology test</div>
            <div className=" text-xs font-semibold text-text_gray">
              Dr. Dianne Cooper
            </div>
          </div>
          <div className=" w-[10%] flex items-center text-text_gray ">
            <FaChevronRight size={10} />
          </div>
        </div>
        <div className="h-[45%] flex items-center  gap-3">
          <div className=" w-[10%] ">
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary">
              <IoMdFlower size={25} />
            </div>
          </div>
          <div className="h-full flex flex-col justify-center w-[80%]">
            <div className=" text-xs font-semibold">Allergy test</div>
            <div className=" text-xs font-semibold text-text_gray">
              Dr. Meg Polchek
            </div>
          </div>
          <div className=" w-[10%] flex items-center text-text_gray ">
            <FaChevronRight size={10} />
          </div>
        </div>
      </div>
      <div className="bg-bg_gray rounded-xl h-[50%] p-2">
        <div className="h-[10%]">
          <h3 className="text-sm font-semibold">Prescription history</h3>
        </div>
        <div className="h-[45%] flex items-center border-b gap-3">
          <div className=" w-[10%] ">
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary">
              <FaPills size={20} />
            </div>
          </div>
          <div className="h-full flex flex-col justify-center w-[80%]">
            <div className=" text-xs font-semibold">Sertraline 50mg</div>
            <div className=" text-xs font-semibold text-text_gray">
              Prescribed monthly
            </div>
          </div>
          <div className=" w-[10%] flex items-center text-text_gray ">
            <FaChevronRight size={10} />
          </div>
        </div>
        <div className="h-[45%] flex items-center  gap-3">
          <div className=" w-[10%] ">
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-primary">
              <FaPills size={25} />
            </div>
          </div>
          <div className="h-full flex flex-col justify-center w-[80%]">
            <div className=" text-xs font-semibold">Paracetamol</div>
            <div className=" text-xs font-semibold text-text_gray">
              One-time Prescription
            </div>
          </div>
          <div className=" w-[10%] flex items-center text-text_gray ">
            <FaChevronRight size={10} />
          </div>
        </div>
      </div>
    </div>
  );
}
