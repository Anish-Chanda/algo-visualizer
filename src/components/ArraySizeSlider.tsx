import { useEffect, useState } from "react";
import { $arraySize } from "../stores/SliderValStore";

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
        className="accent-green-700 cursor-pointer w-full"
        onChange={handleChange}
      />
    </section>
  );
};

export default ArraySizeSlider;
