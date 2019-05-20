import React from 'react';
import classes from './Button.module.scss';

const Button = ({btnType, clicked, btnValue}) => {
  let attachedClassName = [classes.Button, classes[btnType]].join(' '); 
  return(
    <button
      className = {attachedClassName}
      onClick = {clicked}
    >{btnValue}</button>
  )
}

export default Button;