import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { $arraySize } from "../stores/SliderValStore";
import { $bars, type Bar } from "../stores/BarsStore";
import { $selectedAlgo } from "../stores/AlgoStore";

export const Randomize = () => {
  const randomBars: Bar[] = Array.from({ length: $arraySize.get() }, () => ({
    color: "#07D399",
    value: Math.floor(Math.random() * 90) + 5,
  }));

  $bars.set(randomBars);
};

const SortVisualizer = () => {
  const arraySize: number = useStore($arraySize);
  const bars: Bar[] = useStore($bars);
  const algo: String = useStore($selectedAlgo);

  // prefil with random bars
  useEffect(() => {
    Randomize();
    console.log(algo);
  }, [arraySize]);

  return (
    <div className="flex mx-9">
      {bars.map((bar, index) => (
        <div
          className="justify-center flex max-w-[10%]"
          key={index}
          style={{
            height: `${bar.value}%`,
            width: 20,
            margin: "5px",
            backgroundColor: bar.color,
          }}
        >
          {bar.value}
        </div>
      ))}
    </div>
  );
};

export default SortVisualizer;
