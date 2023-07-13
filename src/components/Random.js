import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
  const [gif, setGif] = useState("");

  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5">
      <h1 className="text-2xl underline uppercase font-bold mt-2">
        A Random Gif
      </h1>
      <img src={gif} alt="random_gif" width="450" />
      <button
        className="w-10/12 bg-white text-lg py-2 rounded-lg uppercase font-semibold mb-[20px]"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
