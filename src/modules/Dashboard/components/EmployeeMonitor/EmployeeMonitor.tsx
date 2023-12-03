import {
  BsEmojiFrown,
  BsEmojiLaughing,
  BsEmojiNeutral,
  BsEmojiSmile,
  BsEmojiTear,
} from "react-icons/bs";
import SentimentBarChart from "./SentimentBarChart";

export default function EmployeeMonitor() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex gap-3 h-[40%]">
        <div className="w-[70%] h-full rounded-xl bg-bg_gray p-4 flex gap-6 flex-col justify-center">
          <h3 className="text-sm font-semibold text-primary">
            How is Your day going
          </h3>
          <div className="flex space-x-10 text-primary">
            <BsEmojiTear size={30} />
            <BsEmojiFrown size={30} />
            <BsEmojiNeutral size={30} />
            <BsEmojiSmile size={30} />
            <BsEmojiLaughing size={30} />
          </div>
        </div>
        <div className="w-[60%] h-full rounded-xl bg-bg_gray p-4 flex gap-6 flex-col justify-center">
          <h3 className="text-sm font-semibold text-primary text-center">
            Weekly Work Hour
          </h3>
          <div className="flex  text-primary text-6xl justify-center items-center">
            40
          </div>
        </div>
      </div>
      <div className="h-[70%]">
        <h3 className="h-[5%] text-sm font-semibold  flex-flex-col gap-2">
          Weekly Sentiment Distribution
        </h3>
        <div className="h-[90%] w-full ">
          <SentimentBarChart />
        </div>
      </div>
    </div>
  );
}
