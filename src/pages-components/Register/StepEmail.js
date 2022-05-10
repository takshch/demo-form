import React from 'react';
import InputField from '../../components/InputField';
import useInputField from '../../custom-hooks/useInputField';
import Button from '../../components/Button';
import StepLayout from './Step';

const StepEmail = ({ onNext }) => {
  const [value, onInputHandler] = useInputField();

  return (
    <StepLayout heading="Create your account" className="email">
      <InputField type="text" onInput={onInputHandler} />
      <Button text="Next" onClick={() => onNext(value)} />
    </StepLayout>
  )
};

export default StepEmail;
