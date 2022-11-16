import { useEffect, useState } from "react";

const useRandom = (possibleValues) => {
  const [currentValue, setCurrentValue] = useState("");
  useEffect(
    () =>
      setCurrentValue(
        possibleValues[~~(Math.random() * possibleValues.length)]
      ),
    []
  );

  return currentValue;
};

export default useRandom;
