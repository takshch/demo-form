import React, { useEffect } from 'react';
import InputField from '../../components/InputField';
import useInputField from '../../custom-hooks/useInputField';
import Button from '../../components/Button';
import StepLayout from './StepLayout';

const StepEmail = () => {
  const [value, onInputHandler] = useInputField();

  return (
    <StepLayout heading="Create your account">
      <InputField type="text" onInput={onInputHandler} />
      <Button text="Next" onClick={() => { }} />
    </StepLayout>
  )
};

export default StepEmail;
