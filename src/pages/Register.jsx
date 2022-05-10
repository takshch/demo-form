import React, { useCallback, useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StepEmail from '../pages-components/Register/StepEmail';
import RenderConditionally from '../components/RenderConditionally';
import './Register.scss';

const ACTIONS = {
  ADD_EMAIL: 'ADD_EMAIL',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const STEPS = {
  EMAIL: 'email',
  ACCOUNT_TYPE: 'account-type',
};

function RegisterPage() {
  const [state, dispatch] = useReducer(reducer, {});
  const navigate = useNavigate();
  const { step = STEPS.EMAIL } = useParams();

  useEffect(() => {
    console.log(state);
  }, [state]);

  const onNext = useCallback(({ type, payload, nextStep }) => {
    dispatch({ type, payload });

    if (nextStep) {
      navigate({ pathname: `/register/${nextStep}` });
    }
  }, [dispatch, navigate]);

  return (
    <div className="register-page">
      <div className="back-btn">
        <div className="text">
          Back
        </div>
      </div>
      <div className="content">
        <RenderConditionally when={step === STEPS.EMAIL}>
          <StepEmail onNext={
            (payload) => onNext({ type: ACTIONS.ADD_EMAIL, payload, nextStep: STEPS.ACCOUNT_TYPE })
          } />
        </RenderConditionally>
      </div>
    </div>
  );
}

export default RegisterPage;
