export const Signin = () => {
  return (
    <div className="h-screen w-full flex ">
      <div className="h-full w-2/4 bg-primary text-white flex  flex-col  gap-14 items-center justify-center p-4">
        <div className="h-[15%] text-white w-full">
          <h1 className="font-bold text-2xl text-white">Intellicare </h1>
        </div>
        <div className="h-[80%] flex flex-col gap-10 items-center justify-center">
          <img
            src="https://assets.api.uizard.io/api/cdn/stream/d80c40da-99a6-460b-b3c2-75e0e6bbe72d.png"
            className="h-40 w-40"
          />
          <div>
            <p className="text-sm text-center px-10">
              Join thousands of satisfied users who have transformed their
              health routines with IntelliCare's intuitive interface,
              comprehensive data analysis, and actionable recommendations.
            </p>
          </div>
        </div>
      </div>
      <div className="w-2/4 p-1 bg-primary flex items-center justify-center">
        <div className="h-[70%] w-[65%] bg-white  flex items-center justify-center rounded-md">
          <div className="w-2/3 flex flex-col gap-8">
            <div className="h-[10%]">
              <h2 className="text-primary font-bold gap-5 text-2xl">Log In</h2>
            </div>
            <div className="h-[35%] flex flex-col gap-8">
              <div className="h-14 w-full border border-border_gray rounded-md">
                <input
                  type="email"
                  placeholder="Company Email"
                  className="w-full h-full px-3 text-sm outline-none  rounded-md "
                />
              </div>
              <div className="h-14 w-full border border-border_gray rounded-md">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-full px-3 text-sm outline-none  rounded-md "
                />
              </div>
            </div>
            <div className="h-[10%]">
              <button
                type="button"
                className="w-full py-3 text-sm text-white font-semibold bg-primary rounded-md"
              >
                Log In
              </button>
            </div>
            <div>
              <p className="text-sm text-center px-10 text-primary">
                Forgot Password
              </p>
            </div>
            <div>
              <p className="text-sm text-center px-10 text-primary">
                Need an account?{" "}
                <a href="/signup" className="font-medium hover:underline">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
