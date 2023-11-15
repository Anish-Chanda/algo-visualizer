import { Randomize } from "./sort-visualizer";

const RandomizeButton = () => {
  const handleClick = () => {
    Randomize();
  };
  return (
    <button
      className="button border-2 border-emerald-700 rounded px-5 block text-xl"
      onClick={handleClick}
    >
      Randomize
    </button>
  );
};

export default RandomizeButton;
