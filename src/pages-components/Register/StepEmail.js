import React from 'react';
import InputField from '../../components/InputField';
import useInputField from '../../custom-hooks/useInputField';
import Button from '../../components/Button';
import Step from './Step';

const StepEmail = ({ onNext }) => {
  const [value, onInputHandler] = useInputField();

  return (
    <form onSubmit={() => onNext(value)}>
      <Step heading="Create your account" className="email">
        <InputField
          type="email"
          placeholder="Enter email address"
          autoComplete="email"
          onInput={onInputHandler}
          required={true}
        />
        <Button text="Next" />
      </Step>
    </form>
  )
};

export default StepEmail;
