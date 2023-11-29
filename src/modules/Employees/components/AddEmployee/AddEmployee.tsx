import { LiaTimesSolid } from "react-icons/lia";

export default function AddEmployee() {
  return (
    <div className="absolute inset-0 bg-text_gray bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-[40%] h-[80%] px-3 flex flex-col gap-4">
        <div className="h-[15%]  flex flex-col justify-center">
          <div className="flex justify-end cursor-pointer ">
            <LiaTimesSolid size={20} />
          </div>
          <h3 className="text-3xl font-semibold"> Employee Details</h3>
        </div>

        <div className="h-[85%] flex flex-col gap-2">
          <div className="h-14 w-full ">
            <input
              type="text"
              placeholder="Employee ID"
              className="w-full h-full px-3 text-sm outline-none  bg-input_field_gray"
            />
          </div>
          <div className="h-14 w-full ">
            <input
              type="text"
              placeholder="Employee Name"
              className="w-full h-full px-3 text-sm outline-none  bg-input_field_gray"
            />
          </div>
          <div className="h-14 w-full ">
            <input
              type="text"
              placeholder="Default Password "
              className="w-full h-full px-3 text-sm outline-none  bg-input_field_gray"
            />
          </div>
          <div className="h-14 w-full ">
            <input
              type="text"
              placeholder="Default Password "
              className="w-full h-full px-3 text-sm outline-none  bg-input_field_gray"
            />
          </div>
          <div className=" w-full">
            <button
              type="button"
              className="w-full py-3 text-sm text-white bg-primary  font-semibold"
            >
              Add Employee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
