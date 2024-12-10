import "../App.css";

function MemeDisplay() {
  return (
    <div className="mt-4 mb-4 relative flex flex-col justify-center items-center">
      <img src="http://i.imgflip.com/1bij.jpg" alt="meme image" />
      <span className="absolute text-center mt-[15px] mb-[15px] px-[5px] font-impact text-3xl uppercase text-white tracking-wide text-shadow top-0">
        Top Text
      </span>
      <span className="absolute text-center mt-[15px] mb-[15px] px-[5px] font-impact text-3xl uppercase text-white tracking-wide text-shadow bottom-0">
        Bottom Text
      </span>
    </div>
  );
}

export default MemeDisplay;
