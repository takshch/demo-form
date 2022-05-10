import React from 'react';
import styles from './InputField.module.scss';

function InputField({ ...props }) {
  return (
    <input className={styles['input-field']} {...props} />
  );
}

export default InputField;
