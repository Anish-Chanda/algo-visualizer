import { useEffect, useState } from "react";
import { $arraySize } from "../stores/SliderValStore";
import { useStore } from "@nanostores/react";

const ArraySizeSlider = () => {
  const [val, setVal] = useState<number>(10);

  useEffect(() => {
    setVal($arraySize.get());
  });

  const handleChange = (event: { target: { value: any } }) => {
    const val = event.target.value;
    console.log(val);
    setVal(val);
    $arraySize.set(val);
  };

  const runStatus = useStore($runStatus);

  return (
    <section>
      <label htmlFor="arraySize" className="block text-xl py-1">
        Array Size:
      </label>
      <input
        type="range"
        id="arraySize"
        min="5"
        max="30"
        value={val}
        className="accent-green-700 cursor-pointer w-full disabled:opacity-50"
        onChange={handleChange}
        disabled={runStatus}
      />
    </section>
  );
};

export default ArraySizeSlider;
