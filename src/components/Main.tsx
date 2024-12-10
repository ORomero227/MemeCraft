import { useEffect, useState } from "react";
import { MemeInfo, MemeFromAPI } from "../interfaces/meme";
import MemeDisplay from "./MemeDisplay";
import MemeForm from "./MemeForm";

function Main() {
  const [meme, setMeme] = useState<MemeInfo>({
    topText: "One does not simply",
    bottomText: "Walk into mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState<MemeFromAPI[]>([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    if (allMemes.length === 0) return;
    const randomNumer = Math.floor(Math.random() * allMemes.length);
    const newMemeUrl = allMemes[randomNumer].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: newMemeUrl,
    }));
  }

  return (
    <main>
      <MemeForm
        memeInfo={meme}
        setMemeInfo={setMeme}
        getMemeImage={getMemeImage}
      />
      <MemeDisplay memeInfo={meme} />
    </main>
  );
}

export default Main;
