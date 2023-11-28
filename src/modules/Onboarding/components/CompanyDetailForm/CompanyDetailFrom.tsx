export const CompanyDetailForm = () => {
  return (
    <div className=" h-full w-[50%]">
      <div className="h-[20%]">
        <h2 className="text-primary font-bold text-2xl">
          Tell us about your self
        </h2>
      </div>
      <div className="h-[70%] flex flex-col gap-6">
        <div className="h-14 w-full border border-border_gray rounded-md">
          <input
            type="text"
            placeholder="Name"
            className="w-full h-full px-3 text-sm outline-none  rounded-md "
          />
        </div>
        <div className="h-14 w-full border border-border_gray rounded-md">
          <input
            type="text"
            placeholder="Company Name"
            className="w-full h-full px-3 text-sm outline-none  rounded-md "
          />
        </div>
        <div className="h-14 w-full border border-border_gray rounded-md">
          <input
            type="text"
            placeholder="Salary"
            className="w-full h-full px-3 text-sm outline-none  rounded-md "
          />
        </div>
        <div className="h-14 w-full border border-border_gray rounded-md">
          <input
            type="text"
            placeholder="Designation"
            className="w-full h-full px-3 text-sm outline-none  rounded-md "
          />
        </div>
      </div>
      <div className="h-[10%]">
        <button
          type="button"
          className="w-full py-3 text-sm text-white bg-primary rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};
