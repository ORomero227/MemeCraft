function MemeForm() {
  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4 w-full max-w-xl">
        <input
          id="toptext-input"
          placeholder="Top text"
          type="text"
          className="w-full mt-2 rounded-md border text-sm p-2 font-inter"
        />
        <input
          id="bottomtext-input"
          placeholder="Bottom text"
          type="text"
          className="w-full mt-2 rounded-md border text-sm p-2 font-inter"
        />
        <button
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
