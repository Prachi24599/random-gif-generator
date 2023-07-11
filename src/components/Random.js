import React, { useState } from "react";

const Random = () => {
  const [gif, setGif] = useState("");

  function clickHandler() {}

  return (
    <div className="w-1/2 h-[450px] bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5">
      <h1 className="text-2xl underline uppercase font-bold mt-2">
        A Random Gif
      </h1>
      <img src={gif} alt="random_gif" width="450" />
      <button
        className="w-10/12 bg-white text-lg py-2 rounded-lg uppercase font-semibold"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
