import { loginEmployee } from "@modules/Shared/services/apis/authentication";
import { useAuthStore } from "@modules/Shared/store/userStore";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";

interface FormData {
  // Define form fields
  password: string;
  companyEmail: string;
}

const loginUser = async (formData: FormData) => {
  //post to backend
  try {
    // Your API call or mutation logic here
    const data = await loginEmployee(formData);

    // Return the data
    return data;
  } catch (error) {
    // Handle errors
    throw new Error("Failed to submit form");
  }
};
export const Signin = () => {
  const store = useAuthStore();
  const navigate = useNavigate();
  const mutation = useMutation(loginUser, {
    onSuccess: (data) => {
      if (!data.isRegistered) {
        navigate("/onboarding");
      } else {
        //Redirect to a new page upon successful mutation
        navigate("/");
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  // Define  form state
  const [formData, setFormData] = useState<FormData>({
    password: "",
    companyEmail: "",
  });

  // Update form data on input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger the mutation with form data
    mutation.mutate(formData);
  };

  //redirect user to home
  useEffect(() => {
    if (Object.keys(store.user).length > 0) navigate("/");
  }, []);

  return (
    <div className="h-screen w-full flex ">
      <div className="h-full w-2/4 bg-primary text-white flex  flex-col  gap-14 items-center justify-center p-4">
        <div className="h-[15%] text-white w-full">
          <h1 className="font-bold text-2xl text-white">Health-Hazard </h1>
        </div>
        <div className="h-[80%] flex flex-col gap-10 items-center justify-center">
          <img
            src="https://assets.api.uizard.io/api/cdn/stream/d80c40da-99a6-460b-b3c2-75e0e6bbe72d.png"
            className="h-40 w-40"
          />
          <div>
            <p className="text-sm text-center px-10">
              Join thousands of satisfied users who have transformed their
              health routines with Health-Hazard's intuitive interface,
              comprehensive data analysis, and actionable recommendations.
            </p>
          </div>
        </div>
      </div>
      <div className="w-2/4 p-1 bg-primary flex items-center justify-center">
        <div className="h-[70%] w-[65%] bg-white  flex items-center justify-center rounded-md">
          <form onSubmit={submitForm} className="w-2/3 flex flex-col gap-8">
            <div className="h-[10%]">
              <h2 className="text-primary font-bold gap-5 text-2xl">Log In</h2>
            </div>
            <div className="h-[35%] flex flex-col gap-8">
              <div className="h-14 w-full border border-border_gray rounded-md">
                <input
                  type="email"
                  placeholder="Company Email"
                  name="companyEmail"
                  className="w-full h-full px-3 text-sm outline-none  rounded-md "
                  value={formData.companyEmail}
                  onChange={handleInputChange}
                />
              </div>
              <div className="h-14 w-full border border-border_gray rounded-md">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="w-full h-full px-3 text-sm outline-none  rounded-md "
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="h-[10%]">
              <button
                type="submit"
                disabled={mutation.isLoading}
                className="w-full py-3 text-sm text-white font-semibold bg-primary rounded-md"
              >
                {mutation.isLoading ? "Loading..." : "Log in"}
              </button>
              {mutation.isError && <p>Error submitting form</p>}
              {mutation.isSuccess && <p>Form submitted successfully</p>}
            </div>
            <div>
              <p className="text-sm text-center px-10 text-primary">
                Forgot Password
              </p>
            </div>
            <div>
              <p className="text-sm text-center px-10 text-primary">
                Need an account?{" "}
                <Link to="/signup" className="font-medium hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
