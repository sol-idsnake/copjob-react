import React from 'react';
import './buttonStyles.scss';

const Button = (props) => {
  const { text } = props;
  return <button type="button">{text}</button>;
};

export default Button;
