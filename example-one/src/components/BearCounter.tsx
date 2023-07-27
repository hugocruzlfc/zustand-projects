import React from "react";
import useBearStore from "../store/bearStore";
import useStore from "../store/personStore";

interface BearCounterProps {}

const BearCounter: React.FC<BearCounterProps> = () => {
  const bears = useBearStore((state) => state.bears);
  const [firstName] = useStore((state) => [state.firstName]);
  return (
    <div>
      <h1>
        {firstName} have {bears} around here...
      </h1>
    </div>
  );
};

export default BearCounter;
