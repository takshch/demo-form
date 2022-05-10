import { useCallback, useState } from "react";

const useInputField = ({ defaultValue } = {}) => {
  const [value, setValue] = useState(defaultValue);

  const onInputHandler = useCallback((e) => {
    const { value } = e.target;
    setValue(value);
  }, [setValue]);

  return [value, onInputHandler]
};

export default useInputField;
