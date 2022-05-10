import React from 'react';
import StepEmail from '../pages-components/Register/StepEmail';
import './Register.scss';

function RegisterPage() {
  return (
    <div className="register-page">
      <div className="back-btn">
        <div className="text">
          Back
        </div>
      </div>
      <div className="content">
        <StepEmail />
      </div>
    </div>
  );
}

export default RegisterPage;
