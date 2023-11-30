import { MdOutlineWavingHand } from "react-icons/md";

export default function EmployeeWelcome() {
  return (
    <div className="h-full bg-primary rounded-xl flex items-center text-white px-4 gap-10">
      <div className="h-ful pt-2 ">
        <MdOutlineWavingHand size={30} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-ld">Hello, Katrin Schmidt!</h3>
        <p className=" pr-10">
          Today is Monday, January 12. You have 2 workouts planned, your period
          should start in 3 days and you need to do 2,000 more steps to achieve
          your daily goal. You can do it
        </p>
      </div>
    </div>
  );
}
