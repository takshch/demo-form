import './Step.scss';

function Step({ heading, children, className }) {
  return (
    <div className={`register-step ${className || ''}`} >
      <div className="heading">
        {heading}
      </div>

      {children}
    </div>
  );
}

export default Step;
