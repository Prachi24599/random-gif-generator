import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("car");
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mb-[40px]">
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
        onClick={() => fetchData(tag)}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
