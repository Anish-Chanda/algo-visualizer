import { useState } from "react";
import { $speed } from "../stores/SpeedStore";

const SpeedSlider = () => {
  const [val, setSpeed] = useState(50);
  const HandleChange = (event: { target: { value: any } }) => {
    const val = event.target.value;
    setSpeed(val);
    $speed.set(550 - val);
  };
  return (
    <input
      type="range"
      id="speed"
      min="50"
      max="500"
      value={val}
      className="accent-green-700 cursor-pointer w-full"
      onChange={HandleChange}
    />
  );
};

export default SpeedSlider;
