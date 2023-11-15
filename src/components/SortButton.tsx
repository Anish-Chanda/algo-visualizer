import { $selectedAlgo } from "../stores/AlgoStore";
import { $bars } from "../stores/BarsStore";
import { BubbleSort, MergeSort, QuickSort } from "../utils/sortingAlgorithms";

const SortButton = () => {
  const handleClick = async () => {
    const selectedAlgo = $selectedAlgo.get();
    let bars = $bars.get();
    console.log("sorting...");

    if (selectedAlgo === "bubble") {
      console.log("sorting...");
      await BubbleSort();
    } else if (selectedAlgo === "merge") {
      await MergeSort(bars);
      console.log($bars.get());
    } else if (selectedAlgo === "quick") {
      console.log($bars.get());
      let test = [3, 4, 7, 1, 2];
      await QuickSort(bars, 0, bars.length - 1);
      console.log($bars.get());
    }

    console.log("Sorted");
  };

  return (
    <>
      <button
        className="button border-2 border-emerald-700 rounded px-5 block mb-2 text-xl"
        onClick={handleClick}
      >
        Sort
      </button>
    </>
  );
};

export default SortButton;
