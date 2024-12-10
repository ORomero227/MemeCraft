import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { MemeInfo } from "../interfaces/meme";

type Props = {
  memeInfo: MemeInfo;
  setMemeInfo: Dispatch<SetStateAction<MemeInfo>>;
  getMemeImage: () => void;
};

function MemeForm({ setMemeInfo, memeInfo, getMemeImage }: Props) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.currentTarget;
    setMemeInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  }

  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4 w-full max-w-xl">
        <input
          name="topText"
          value={memeInfo.topText}
          onChange={handleChange}
          type="text"
          className="w-full mt-2 rounded-md border text-sm p-2 font-inter"
        />
        <input
          name="bottomText"
          value={memeInfo.bottomText}
          onChange={handleChange}
          type="text"
          className="w-full mt-2 rounded-md border text-sm p-2 font-inter"
        />
        <button
          onClick={getMemeImage}
          type="button"
          className="col-span-1 md:col-span-2 rounded-md bg-black text-white border-none cursor-pointer py-2 px-4 min-h-10 font-inter"
        >
          Get a new meme image 🖼️
        </button>
      </div>
    </div>
  );
}

export default MemeForm;
