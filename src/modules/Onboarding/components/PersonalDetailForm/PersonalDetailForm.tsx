import { useAuthStore } from "@modules/Shared/store/userStore";
import { useState } from "react";

interface IProps {
  setPage: (state: boolean) => void;
}

interface FormData {
  // Define form fields
  designation: string;
  role: string;
  gender: string;
}

export const PersonalDetailForm = ({ setPage }: IProps) => {
  const { setOnBoarding } = useAuthStore();
  const [formData, setFormData] = useState<FormData>({
    designation: "",
    role: "",
    gender: "",
  });

  // Update form data on input changes
  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const proceed = () => {
    setOnBoarding(formData);
    setPage(true);
  };

  return (
    <div className=" h-full flex flex-col gap-6 justify-center items-center w-[50%]">
      <div className=" w-full">
        <h2 className="text-primary font-bold text-2xl">
          Tell us about your self
        </h2>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <div className="h-14 w-full border border-border_gray rounded-md">
          <input
            type="text"
            placeholder="Designation"
            name="designation"
            className="w-full h-full px-3 text-sm outline-none  rounded-md "
            value={formData.designation}
            onChange={handleInputChange}
          />
        </div>
        <div className="h-14 w-full border border-border_gray rounded-md">
          <select
            placeholder="Role"
            name="role"
            className="w-full h-full px-3 text-sm outline-none cursor-pointer  rounded-md  "
            value={formData.role}
            onChange={handleInputChange}
          >
            <option value="">Role</option>
            <option value="Admin">Admin</option>
            <option value="Employee">Employee</option>
          </select>
        </div>
        <p className="text-primary text-xs font-semibold">Gender</p>
        <div className="flex gap-10">
          <div className="flex items-center">
            <input
              id="option1"
              name="gender"
              type="radio"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleInputChange}
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
              name="gender"
              type="radio"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleInputChange}
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
              name="gender"
              type="radio"
              value="none"
              checked={formData.gender === "none"}
              onChange={handleInputChange}
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
      <div className=" w-full">
        <button
          type="button"
          onClick={() => {
            proceed();
          }}
          className="w-full py-3 text-sm text-white bg-primary rounded-md font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};
