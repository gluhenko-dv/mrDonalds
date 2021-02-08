import { useState } from "react";

export function useChoices() {
  const [choice, setChoice] = useState();

  function changeChoices(e:any) {
    setChoice(e.target.value);
  }
  return { choice, changeChoices };
}
