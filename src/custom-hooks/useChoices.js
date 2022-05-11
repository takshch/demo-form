import { useState, useCallback } from "react";

const useChoices = ({ choices } = {}) => {
  const [selectedChoice, setSelectedChoice] = useState();

  const selectChoice = useCallback((choiceId) => {
    const choice = choices[choiceId];

    if (!choice) {
      console.error('Invalid choice');
      return;
    }

    setSelectedChoice(choice);
  }, [choices]);

  return [selectedChoice, selectChoice];
}

export default useChoices;
