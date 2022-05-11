import React, { useCallback, useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StepEmail from '../pages-components/Register/StepEmail';
import RenderConditionally from '../components/RenderConditionally';
import StepAccountType from '../pages-components/Register/StepAccountType';
import StepCountry from '../pages-components/Register/StepCountry';
import './Register.scss';

const register = (details) => {
  console.log(details);
  alert("You have been successfully registered");
};

const ACTIONS = {
  ADD_EMAIL: 'ADD_EMAIL',
  ADD_ACCOUNT_TYPE: 'ADD_ACCOUNT_TYPE',
  ADD_COUNTRY: 'COUNTRY',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_EMAIL:
      return { ...state, email: action.payload };
    case ACTIONS.ADD_ACCOUNT_TYPE:
      return { ...state, accountType: action.payload };
    case ACTIONS.ADD_COUNTRY:
      return { ...state, country: action.payload };
    default:
      return state;
  }
};

const ACCOUNT_TYPES = ['personal', 'business'];
const COUNTRIES = ['India', 'Pakistan', 'Nepal', 'Mayanmar', 'Bangladesh', 'USA'];

const STEPS = {
  EMAIL: 'email',
  ACCOUNT_TYPE: 'account-type',
  COUNTRY: 'country',
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
      {step !== STEPS.EMAIL && (
        <div className="back-btn" onClick={() => navigate(-1)}>
          <div className="text">
            Back
          </div>
        </div>
      )}
      <div className="content">
        <RenderConditionally when={step === STEPS.EMAIL}>
          <StepEmail onNext={
            (payload) => onNext({ type: ACTIONS.ADD_EMAIL, payload, nextStep: STEPS.ACCOUNT_TYPE })
          } />
        </RenderConditionally>

        <RenderConditionally when={step === STEPS.ACCOUNT_TYPE}>
          <StepAccountType
            accountChoices={ACCOUNT_TYPES}
            onNext={
              (payload) => onNext({ type: ACTIONS.ADD_ACCOUNT_TYPE, payload, nextStep: STEPS.COUNTRY })
            }
          />
        </RenderConditionally>

        <RenderConditionally when={step === STEPS.COUNTRY}>
          <StepCountry
            countries={COUNTRIES}
            onNext={
              (payload) => {
                onNext({ type: ACTIONS.ADD_COUNTRY, payload });
                register(state);
              }
            }
          />
        </RenderConditionally>
      </div>
    </div>
  );
}

export default RegisterPage;
