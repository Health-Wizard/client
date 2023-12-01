import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarFeature() {
  const today = new Date();

  return (
    <div className="h-full w-full flex justify-center items-center">
      <Calendar
        defaultView="month"
        defaultValue={today}
        tileClassName={({ date, view }) => {
          if (
            view === "month" &&
            date.toDateString() === today.toDateString()
          ) {
            return "bg-primary text-white rounded-md";
          }
        }}
        className=" h-full w-full relative "
      />
    </div>
  );
}
