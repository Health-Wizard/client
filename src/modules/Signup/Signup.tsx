export const Signup = () => {
  return (
    <div className="h-screen w-full flex ">
      <div className="w-2/3 p-4">
        <div className="h-[15%] text-primary">
          <h1 className="font-bold text-2xl ">Intellicare </h1>
        </div>
        <div className="h-[80%]  flex items-center justify-center">
          <div className=" h-full w-[50%] flex flex-col gap-3">
            <div className="h-[10%]">
              <h2 className="text-primary font-bold text-2xl">Sign Up</h2>
            </div>
            <div className="h-[65%] flex flex-col gap-6">
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
                  placeholder="User Name"
                  className="w-full h-full px-3 text-sm outline-none  rounded-md "
                />
              </div>
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
              <div className="h-14 w-full border border-border_gray rounded-md">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full h-full px-3 text-sm outline-none  rounded-md "
                />
              </div>
            </div>
            <div className="h-[10%]">
              <button
                type="button"
                className="w-full py-3 text-sm text-white font-semibold bg-primary rounded-md"
              >
                Sign Up
              </button>
            </div>
            <div>
              <p className="text-sm text-center px-10 text-primary">
                Already Signed up. Please{" "}
                <a href="/login" className="font-medium hover:underline">
                  Login In
                </a>
              </p>
            </div>
          </div>
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
            routines with IntelliCare's intuitive interface, comprehensive data
            analysis, and actionable recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};
