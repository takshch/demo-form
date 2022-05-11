import { useState, useCallback, useEffect } from "react";

const useChoices = ({ choices, defaultChoice } = {}) => {
  const [selectedChoice, setSelectedChoice] = useState();

  const selectChoice = useCallback((choiceId) => {
    const choice = choices[choiceId];

    if (!choice) {
      console.error('Invalid choice');
      return;
    }

    setSelectedChoice(choice);
  }, [choices]);

  useEffect(() => {
    if (typeof defaultChoice !== 'undefined') {
      selectChoice(defaultChoice);
    }
  }, [selectChoice, defaultChoice]);

  return [selectedChoice, selectChoice];
}

export default useChoices;
