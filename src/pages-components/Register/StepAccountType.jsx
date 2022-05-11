import Step from "./Step";
import Button from '../../components/Button';
import useChoices from '../../custom-hooks/useChoices';

function AccountChoice({ text, onClick, isSelected }) {
  return (
    <div className={`choice ${isSelected ? "selected" : ""}`} onClick={onClick}>
      {text}
    </div>
  );
}

function StepAccountType({ accountChoices, onNext }) {
  const [type, selectType] = useChoices({ choices: accountChoices });

  return (
    <Step heading="Please choose Account type" className="account-type">
      <div className="choices">
        <AccountChoice
          text="Personal"
          isSelected={type === accountChoices[0]}
          onClick={() => selectType(0)}
        />
        <AccountChoice
          text="Business"
          isSelected={type === accountChoices[1]}
          onClick={() => selectType(1)}
        />
      </div>

      <Button text="Next" onClick={() => onNext(type)} />
    </Step>
  );
}

export default StepAccountType;
