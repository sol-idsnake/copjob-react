import React from 'react';
import './buttonStyles.scss';

const ButtonTest = (props) => {
  const { text } = props;
  return <button type="button">{text}</button>;
};

export default ButtonTest;
