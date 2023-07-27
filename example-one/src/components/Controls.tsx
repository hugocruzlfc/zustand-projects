import React from "react";
import useBearStore from "../store/bearStore";

interface ControlsProps {}

const Controls: React.FC<ControlsProps> = () => {
  const { increasePopulation, removeAllBears, decreasePopulation } =
    useBearStore();

  return (
    <div>
      <p>Increase Bears</p>
      <button onClick={increasePopulation}>one up</button>
      <b />
      <p>Decrease Bears</p>
      <button onClick={decreasePopulation}>No Bears</button>
      <p>Remove all Bears</p>
      <button onClick={removeAllBears}>No Bears</button>
    </div>
  );
};

export default Controls;
