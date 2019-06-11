import React from 'react';
import classes from './Button.module.scss';

interface ButtonProps {
  btnType: string,
  clicked?: any,
  btnValue: string
}

const Button: React.FC<ButtonProps> = ({btnType, clicked, btnValue}) => {
  let attachedClassName = [classes.Button, classes[btnType]].join(' '); 
  return(
    <button
      className = {attachedClassName}
      onClick = {clicked}
    >{btnValue}</button>
  )
}

export default Button;