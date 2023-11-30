import {
  BsEmojiTear,
  BsEmojiNeutral,
  BsEmojiFrown,
  BsEmojiSmile,
  BsEmojiLaughing,
} from "react-icons/bs";

export default function Reports() {
  return (
    <div className="h-[40%]  flex gap-4">
      <div className="w-[70%] h-full rounded-xl bg-bg_gray p-4 flex gap-6 flex-col justify-center">
        <h3 className="text-sm font-semibold text-primary">
          How's her day going
        </h3>
        <div className="flex space-x-10 text-primary">
          <BsEmojiTear size={30} />
          <BsEmojiFrown size={30} />
          <BsEmojiNeutral size={30} />
          <BsEmojiSmile size={30} />
          <BsEmojiLaughing size={30} />
        </div>
      </div>
      <div className="w-[30%] h-full rounded-xl bg-bg_gray p-4 flex gap-6 flex-col justify-center">
        <h3 className="text-sm font-semibold text-primary">Hapiness index</h3>
        <div className="flex  text-primary text-6xl justify-center items-center">
          45
        </div>
      </div>
    </div>
  );
}
