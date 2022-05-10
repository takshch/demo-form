import React, { useEffect } from 'react';
import InputField from '../../components/InputField';
import useInputField from '../../custom-hooks/useInputField';
import Button from '../../components/Button';

const StepEmail = () => {
  const [value, onInputHandler] = useInputField();

  return (
    <>
      <h3>Create your Account</h3>
      <InputField type="text" onInput={onInputHandler} />
      <Button text="Next" onClick={() => { }} />
    </>
  )
};

export default StepEmail;
