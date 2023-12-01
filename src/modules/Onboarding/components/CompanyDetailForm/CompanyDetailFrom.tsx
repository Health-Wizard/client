import {
  createAdmin,
  createEmployee,
  getAllCompanyNames,
} from "@modules/Shared/services/apis/employee";
import { useAuthStore } from "@modules/Shared/store/userStore";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const fetchCompanyData = async () => {
  const data = await getAllCompanyNames();
  return data;
};

interface FormData {
  // Define form fields
  sector: string;
  sizeOfCompany: string;
  role: string;
  gender: string;
  companyName: string;
  companyUrl: string;
  department: string;
  dateOfJoining: string;
  salary: number;
  age: number;
  designation: string;
}

const onBoardAdmin = async (formData: FormData) => {
  console.log(formData);
  //post to backend
  try {
    // Your API call or mutation logic here
    const data = await createAdmin(formData);

    // Return the data
    return data;
  } catch (error) {
    // Handle errors
    throw new Error("Failed to submit form");
  }
};

const onBoardEmployee = async (formData: FormData) => {
  //post to backend
  try {
    // Your API call or mutation logic here
    const data = await createEmployee(formData);

    // Return the data
    return data;
  } catch (error) {
    // Handle errors
    throw new Error("Failed to submit form");
  }
};

export const CompanyDetailForm = () => {
  const store = useAuthStore();
  const navigate = useNavigate();
  const adminMutation = useMutation(onBoardAdmin, {
    onSuccess: (data) => {
      //Redirect to a new page upon successful mutation
      if (data) navigate("/");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const employeeMutation = useMutation(onBoardEmployee, {
    onSuccess: (data) => {
      //Redirect to a new page upon successful mutation
      if (data) navigate("/");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const { data, isLoading } = useQuery("companyList", fetchCompanyData);
  const [formData, setFormData] = useState<FormData>({
    role: store.onBoarding.role,
    gender: store.onBoarding.gender,
    designation: store.onBoarding.designation,
    sector: "",
    sizeOfCompany: "",
    companyName: "",
    companyUrl: "",
    department: "",
    dateOfJoining: "",
    salary: 0,
    age: 0,
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

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger the mutation with form data
    if (store.onBoarding?.role == "Admin") {
      adminMutation.mutate(formData);
    } else {
      employeeMutation.mutate(formData);
    }
  };

  return (
    <form onSubmit={submitForm} className=" h-full w-[50%] flex flex-col gap-3">
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
                value={formData.companyName}
                onChange={handleInputChange}
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
                value={formData.sector}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <div className="h-10 w-full border border-border_gray rounded-md">
              <select
                placeholder="Company Size"
                name="sizeOfCompany"
                className="w-full h-full px-3 text-sm outline-none cursor-pointer  rounded-md  "
                value={formData.sizeOfCompany}
                onChange={handleInputChange}
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
                value={formData.companyUrl}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      )}
      {store.onBoarding?.role == "Employee" && (
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
                value={formData.department}
                onChange={handleInputChange}
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
                value={formData.dateOfJoining}
                onChange={handleInputChange}
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
                value={formData.companyName}
                onChange={handleInputChange}
              >
                <option value="">{isLoading ? "Loading" : ""}</option>
                {data &&
                  data.companies.map((company: string, idx: number) => (
                    <option key={idx} value={company}>
                      {company}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="salary" className="text-sm ">
              Salary
            </label>
            <div className="h-10 w-full border border-border_gray rounded-md">
              <input
                type="number"
                placeholder=""
                name="salary"
                id="salary"
                className="w-full h-full px-3 text-sm outline-none  rounded-md "
                value={formData.salary == 0 ? "" : formData.salary}
                min={1}
                onChange={handleInputChange}
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
                min={1}
                id="age"
                name="age"
                className="w-full h-full px-3 text-sm outline-none  rounded-md "
                value={formData.age == 0 ? "" : formData.age}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      )}
      <div className="h-[10%]">
        <button
          type="submit"
          className="w-full py-3 text-sm text-white font-semibold bg-primary rounded-md"
        >
          {adminMutation.isLoading || employeeMutation.isLoading
            ? "Loading..."
            : "done"}
        </button>
        {adminMutation.isError ||
          (employeeMutation.isError && <p>Error submitting form</p>)}
        {adminMutation.isSuccess ||
          (employeeMutation.isSuccess && <p>Form submitted successfully</p>)}
      </div>
    </form>
  );
};
