import "../App.css";

type Props = {
  memeInfo: {
    topText: string;
    bottomText: string;
    imageUrl: string;
  };
};

function MemeDisplay({ memeInfo }: Props) {
  return (
    <div className="mt-4 relative flex flex-col justify-center items-center">
      <img
        src={memeInfo.imageUrl}
        alt="meme image"
        className="md:h-96 md:max-w-xl"
      />
      <span className="absolute text-center mt-[15px] mb-[15px] px-[5px] font-impact text-3xl uppercase text-white tracking-wide text-shadow top-0">
        {memeInfo.topText}
      </span>
      <span className="absolute text-center mt-[15px] mb-[15px] px-[5px] font-impact text-3xl uppercase text-white tracking-wide text-shadow bottom-0">
        {memeInfo.bottomText}
      </span>
    </div>
  );
}

export default MemeDisplay;
