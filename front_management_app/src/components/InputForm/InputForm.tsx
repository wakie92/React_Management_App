import React from 'react';
import classes from './InputForm.module.scss';

interface InputFormProps {
  elementConfig : { name : string, placeholder: string};
  value : any;
  valid : boolean
  rule : { required: boolean};
  id : string;
  idNum : number;
  onChange: (e: React.FormEvent<HTMLInputElement>, idNum : number, id : string) => void;
}
const InputForm:React.FC<InputFormProps> = (
  {elementConfig, valid, value, rule, onChange, idNum, id}
  ) => {
    console.log(valid);
  return (
    <div className = {classes.InputWrapper}>
      <input
        type = "text"
        value = {value}
        name = {elementConfig.name}
        placeholder = {elementConfig.placeholder}
        onChange = {(e) => onChange(e, idNum, id)}
      />
    </div>
  )
}
export default InputForm;