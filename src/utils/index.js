import { useState } from "react";

const isDigits = (value = "") => !!String(value).match(/^\d+$/);

export function useNumberInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  const onChange = (evt) => {
    const givenValue = evt.target.value;
    const isOnlyDigits = isDigits(givenValue);
    if (givenValue && !isOnlyDigits) return;

    setValue(givenValue);
  };

  return { value, onChange };
}
