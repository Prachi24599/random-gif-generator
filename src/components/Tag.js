import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
  const [tag, setTag] = useState("car");
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5">
      <h1 className="text-2xl underline uppercase font-bold mt-2">
        Random {tag} Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="random_gif" width="450" />}
      <input
        className="w-10/12 text-lg py-1 rounded-lg text-center outline-none"
        onChange={(event) => {
          setTag(event.target.value);
        }}
        value={tag}
      />
      <button
        className="w-10/12 bg-white text-lg py-2 rounded-lg uppercase font-semibold mb-[20px]"
        onClick={() => fetchData()}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
