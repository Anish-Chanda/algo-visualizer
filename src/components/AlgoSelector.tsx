import { useStore } from "@nanostores/react";
import { $selectedAlgo } from "../stores/AlgoStore";

const AlgoSelector = () => {
  const selectedAlgo = useStore($selectedAlgo);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newAlgo: string = event.target.value;
    console.log(newAlgo);
    $selectedAlgo.set(newAlgo);
  };

  return (
    <select
      id="algorithm"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      value={selectedAlgo}
      onChange={handleChange}
    >
      <option value="merge">Merge Sort</option>
      <option value="bubble">Bubble Sort</option>
      <option value="quick">Quick Sort</option>
    </select>
  );
};

export default AlgoSelector;
