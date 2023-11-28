export const PersonalDetailForm = () => {
  return (
    <div className=" h-[60%] w-[50%]">
      <div className="h-[20%]">
        <h2 className="text-primary font-bold text-2xl">
          Tell us about your self
        </h2>
      </div>
      <div className="h-[70%] flex flex-col gap-6">
        <div className="h-14 w-full border border-border_gray rounded-md">
          <input
            type="text"
            placeholder="Username"
            className="w-full h-full px-3 text-sm outline-none  rounded-md "
          />
        </div>
        <div className="h-14 w-full border border-border_gray rounded-md">
          <input
            type="text"
            placeholder="Role"
            className="w-full h-full px-3 text-sm outline-none  rounded-md "
          />
        </div>
        <p className="text-primary text-xs font-semibold">Gender</p>
        <div className="flex gap-10">
          <div className="flex items-center">
            <input
              id="option1"
              name="options"
              type="radio"
              value="option1"
              // checked={selected === "option1"}
              // onChange={() => setSelected("option1")}
              className="w-4 h-4 text-primary cursor-pointer bg-gray-100 border-gray-300 focus:ring-primary accent-primary"
            />
            <label
              htmlFor="option1"
              className="ml-2 text-xs font-medium text-primary cursor-pointer"
            >
              Male
            </label>
          </div>

          <div className="flex items-center ">
            <input
              id="option2"
              name="options"
              type="radio"
              value="option2"
              // checked={selected === "option2"}
              // onChange={() => setSelected("option2")}
              className="w-4 h-4 text-primary bg-gray-100 cursor-pointer border-gray-300 focus:ring-primary accent-primary"
            />
            <label
              htmlFor="option2"
              className="ml-2 text-xs font-medium cursor-pointer text-primary"
            >
              Female
            </label>
          </div>

          <div className="flex items-center ">
            <input
              id="option3"
              name="options"
              type="radio"
              value="option3"
              // checked={selected === "option3"}
              // onChange={() => setSelected("option3")}
              className="w-4 h-4 text-primary bg-gray-100 cursor-pointer border-gray-300 focus:ring-primary accent-primary"
            />
            <label
              htmlFor="option3"
              className="ml-2 text-xs font-medium cursor-pointer text-primary"
            >
              I Prefer not to say
            </label>
          </div>
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
