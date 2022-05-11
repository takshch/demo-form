import { useCallback, useRef } from "react";
import Button from '../../components/Button';
import useChoices from "../../custom-hooks/useChoices";
import Step from "./Step";

function StepCountry({ countries, onNext }) {
  const [country, selectCountry] = useChoices({ choices: countries, defaultChoice: 0 });
  const selectRef = useRef();

  const onChange = useCallback(() => {
    const { current } = selectRef;
    const { selectedIndex } = current.options;
    selectCountry(selectedIndex);
  }, [selectCountry]);

  return (
    <Step heading="Select your Country" className="country">
      <select
        className="choices"
        ref={selectRef}
        onChange={onChange}
      >
        {countries.map(
          (country, idx) => <option key={idx}>{country}</option>
        )}
      </select>
      <Button text="Register" onClick={() => onNext(country)} />
    </Step>
  );
}

export default StepCountry;
