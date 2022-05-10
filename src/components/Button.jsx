import React from 'react';

function Button({ text, onClick }) {
  return (
    <button onclick={onClick}>{text}</button>
  );
}

export default Button;
