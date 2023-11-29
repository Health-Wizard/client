import profile from "@assets/images/profile.jpeg";

export default function EmployeeDetail() {
  return (
    <div className="h-full rounded-xl bg-bg_gray flex items-center px-10">
      <div className="w-[50%] h-full flex gap-6  items-center">
        <img src={profile} className="h-20 w-20 rounded-full" alt="" />
        <div className=" flex flex-col gap-2">
          <div className="text-3xl ">Employee</div>
          <div className="text-3xl font-semibold">Mary Weather</div>
        </div>
      </div>
      <div className="w-[50%] h-full py-3 flex">
        <div className="w-[30%] h-full">
          <div className="h-[33.3%]  space-x-2">
            <span className="text-text_gray text-xl font-semibold">Sex:</span>
            <span className="text-black text-xl font-semibold">F</span>
          </div>
          <div className="h-[33.3%]  space-x-2">
            <span className="text-text_gray text-xl font-semibold">Age:</span>
            <span className="text-black text-xl font-semibold">32</span>
          </div>
          <div className="h-[33.3%]  space-x-2">
            <span className="text-text_gray text-xl font-semibold">Blood:</span>
            <span className="text-black text-xl font-semibold">O+</span>
          </div>
        </div>
        <div className="w-[70%] h-full">
          <div className="h-[33.3%]  space-x-2">
            <span className="text-text_gray text-xl font-semibold">
              Last check-in:
            </span>
            <span className="text-black text-xl font-semibold">Year ago</span>
          </div>
          <div className="h-[33.3%]  space-x-2">
            <span className="text-text_gray text-xl font-semibold">Dept:</span>
            <span className="text-black text-xl font-semibold">Business</span>
          </div>
          <div className="h-[33.3%]  space-x-2">
            <span className="text-text_gray text-xl font-semibold">
              Patient nr:
            </span>
            <span className="text-black text-xl font-semibold">R4L7Y9C2E1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
