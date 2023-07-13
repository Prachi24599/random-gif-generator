import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5">
      <h1 className="text-2xl underline uppercase font-bold mt-2">
        A Random Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="random_gif" width="450" />}
      <button
        className="w-10/12 bg-white text-lg py-2 rounded-lg uppercase font-semibold mb-[20px]"
        onClick={() => fetchData()}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
