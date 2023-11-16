import { useStore } from "@nanostores/react";
import { Randomize } from "./sort-visualizer";
import { $runStatus } from "../stores/StatusStore";

const RandomizeButton = () => {
  const handleClick = () => {
    Randomize();
  };

  const runStatus = useStore($runStatus);
  return (
    <button
      className="button border-2 border-emerald-700 rounded px-5 block text-xl disabled:opacity-50"
      onClick={handleClick}
      disabled={runStatus}
    >
      Randomize
    </button>
  );
};

export default RandomizeButton;
