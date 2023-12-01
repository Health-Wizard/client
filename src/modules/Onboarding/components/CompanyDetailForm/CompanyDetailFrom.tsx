import { useAuthStore } from "@modules/Shared/store/userStore";

export const CompanyDetailForm = () => {
  const store = useAuthStore();
  console.log(store.onBoarding);
  return (
    <div className=" h-full w-[50%] flex flex-col gap-3">
      <div className="h-[10%]">
        <h2 className="text-primary font-bold text-2xl">
          Tell us about your self
        </h2>
      </div>

      {store.onBoarding?.role == "Admin" && (
        <div className="h-[40%] flex flex-col gap-3">
          <div>
            <div className="h-10 w-full border border-border_gray rounded-md">
              <input
                type="text"
                id="Company Name"
                name="companyName"
                placeholder="Company Name"
                className="w-full h-full px-3 text-sm outline-none  rounded-md "
              />
            </div>
          </div>
          <div>
            <div className="h-12 w-full border border-border_gray rounded-md">
              <input
                type="text"
                placeholder="Sector"
                name="sector"
                className="w-full h-full px-3 text-sm outline-none  rounded-md "
              />
            </div>
          </div>
          <div>
            <div className="h-10 w-full border border-border_gray rounded-md">
              <select
                placeholder="Company Size"
                name="sizeOfCompany"
                className="w-full h-full px-3 text-sm outline-none cursor-pointer  rounded-md  "
              >
                <option value="">Company Size</option>
                <option value="1-10">1 - 10</option>
                <option value="11-50">11 - 50</option>
                <option value="51-100">51 - 100</option>
                <option value="100+">100+</option>
              </select>
            </div>
          </div>

          <div>
            <div className="h-10 w-full border border-border_gray rounded-md">
              <input
                type="text"
                placeholder="Company URL"
                name="companyUrl"
                className="w-full h-full px-3 text-sm outline-none  rounded-md "
              />
            </div>
          </div>
        </div>
      )}
      {store.onBoarding?.role == "employee" && (
        <div className="h-[70%] flex flex-col gap-1">
          <div>
            <label htmlFor="dept" className="text-sm ">
              Department
            </label>
            <div className="h-10 w-full border border-border_gray rounded-md">
              <input
                type="text"
                id="dept"
                name="department"
                className="w-full h-full px-3 text-sm outline-none  rounded-md "
              />
            </div>
          </div>
          <div>
            <label htmlFor="dateJoined" className="text-sm ">
              Date of Joining
            </label>
            <div className="h-12 w-full border border-border_gray rounded-md">
              <input
                type="date"
                placeholder="Date of Joining"
                name="dateOfJoining"
                id="dateJoined"
                className="w-full h-full px-3 text-sm outline-none  rounded-md "
              />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="text-sm ">
              Company Name
            </label>
            <div className="h-10 w-full border border-border_gray rounded-md">
              <select
                placeholder=""
                name="companyName"
                id="company"
                className="w-full h-full px-3 text-sm outline-none cursor-pointer  rounded-md  "
              >
                <option value="">Role</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="salary" className="text-sm ">
              Salary
            </label>
            <div className="h-10 w-full border border-border_gray rounded-md">
              <input
                type="text"
                placeholder=""
                name="salary"
                id="salary"
                className="w-full h-full px-3 text-sm outline-none  rounded-md "
              />
            </div>
          </div>

          <div>
            <label htmlFor="age" className="text-sm ">
              Age
            </label>
            <div className="h-10 w-full border border-border_gray rounded-md">
              <input
                type="number"
                placeholder=""
                id="age"
                name="age"
                className="w-full h-full px-3 text-sm outline-none  rounded-md "
              />
            </div>
          </div>
        </div>
      )}
      <div className="h-[10%]">
        <button
          type="button"
          className="w-full py-3 text-sm text-white font-semibold bg-primary rounded-md"
        >
          Done
        </button>
      </div>
    </div>
  );
};
