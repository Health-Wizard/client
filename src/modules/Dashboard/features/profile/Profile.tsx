import profile from "@assets/images/profile.jpeg";

export default function Profile() {
  return (
    <div className="h-full w-[90%] m-auto rounded-xl bg-blue_shade_2 py-4 text-primary">
      <div className="h-[33.3%] flex items-center justify-center">
        <img src={profile} className="h-20 w-20 rounded-full" alt="" />
      </div>
      <div className="h-[33.3%] flex flex-col items-center justify-center ">
        <h3 className="font-semibold text-center">Karen Schmidt</h3>
        <p className="text-xs">Female, 29 years old</p>
      </div>
      <div className="h-[33.3%] border-t-2 border-border_gray items-center grid grid-cols-3 py-3">
        <div className="border-r-2 border-border_gray h-full flex flex-col  items-center justify-center">
          <p className="text-xs">Height</p>
          <p className="font-semibold text-center text-xs">165 cm</p>
        </div>
        <div className="border-r-2 border-border_gray h-full flex flex-col  items-center justify-center">
          <p className="text-xs">Weight</p>
          <p className="font-semibold text-center text-xs">75kg</p>
        </div>
        <div className=" h-full flex flex-col  items-center justify-center">
          <p className="text-xs">Blood</p>
          <p className="font-semibold text-center text-xs">O-</p>
        </div>
      </div>
    </div>
  );
}
