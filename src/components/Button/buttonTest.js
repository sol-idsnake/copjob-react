import React from 'react';
import rippleEffect from './buttonRipple';
import './buttonStyles.scss';

const ButtonTest = (props) => {
  function handleClick(e) {
    e.preventDefault();
    rippleEffect();
  }
  const { text } = props;
  return (
    <button type="button" ripple="ripple" onClick={handleClick}>
      {text}
    </button>
  );
};

export default ButtonTest;
