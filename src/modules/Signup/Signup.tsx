import { registerEmployee } from "@modules/Shared/services/apis/authentication";
import { useAuthStore } from "@modules/Shared/store/userStore";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";

interface FormData {
  // Define form fields
  username: string;
  password: string;
  name: string;
  companyEmail: string;
}

const registerUser = async (formData: FormData) => {
  //post to backend
  registerEmployee(formData);
};

export const Signup = () => {
  const store = useAuthStore();
  const navigate = useNavigate();
  const mutation = useMutation(registerUser, {
    onSuccess: () => {
      // Redirect to a new page upon successful mutation
      navigate("/login");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  // Define  form state
  const [password2, setPassword2] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    name: "",
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
    console.log(formData);
    // Trigger the mutation with form data
    mutation.mutate(formData);
  };

  //redirect user to home
  useEffect(() => {
    if (Object.keys(store.user).length > 0) navigate("/");
  }, []);

  return (
    <div className="h-screen w-full flex ">
      <div className="w-2/3 p-4">
        <div className="h-[15%] text-primary">
          <h1 className="font-bold text-2xl ">MindSync </h1>
        </div>
        <div className="h-[80%]  flex items-center justify-center">
          <form
            onSubmit={submitForm}
            className=" h-full w-[50%] flex flex-col gap-3"
          >
            <div className="h-[10%]">
              <h2 className="text-primary font-bold text-2xl">Sign Up</h2>
            </div>
            <div className="h-[65%] flex flex-col gap-6">
              <div className="h-14 w-full border border-border_gray rounded-md">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="w-full h-full px-3 text-sm outline-none  rounded-md "
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="h-14 w-full border border-border_gray rounded-md">
                <input
                  type="text"
                  placeholder="User Name"
                  name="username"
                  className="w-full h-full px-3 text-sm outline-none  rounded-md "
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
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
                  name="password"
                  placeholder="Password"
                  className="w-full h-full px-3 text-sm outline-none  rounded-md "
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="h-14 w-full border border-border_gray rounded-md">
                <input
                  type="password"
                  name="password2"
                  placeholder="Confirm Password"
                  className="w-full h-full px-3 text-sm outline-none  rounded-md "
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </div>
            </div>
            <div className="h-[10%]">
              <button
                type="submit"
                disabled={mutation.isLoading}
                className="w-full py-3 text-sm text-white font-semibold bg-primary rounded-md"
              >
                {mutation.isLoading ? "Loading..." : "Sign up"}
              </button>
              {mutation.isError && <p>Error submitting form</p>}
              {mutation.isSuccess && <p>Form submitted successfully</p>}
            </div>
            <div>
              <p className="text-sm text-center px-10 text-primary">
                Already Signed up. Please{" "}
                <Link to="/login" className="font-medium hover:underline">
                  Login In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="h-full w-1/3 bg-primary text-white flex  flex-col  gap-10 items-center justify-center">
        <img
          src="https://assets.api.uizard.io/api/cdn/stream/d80c40da-99a6-460b-b3c2-75e0e6bbe72d.png"
          className="h-40 w-40"
        />
        <div>
          <p className="text-sm text-center px-10">
            Join thousands of satisfied users who have transformed their health
            routines with MindSyncs's intuitive interface, comprehensive data
            analysis, and actionable recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};
