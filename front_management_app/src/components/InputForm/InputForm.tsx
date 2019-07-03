import React from 'react';
import classes from './InputForm.module.scss';
import DatePicker  from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
interface InputFormProps {
  elementConfig : { name : string, placeholder: string};
  value : any;
  valid : boolean
  rule : { required: boolean};
  id : string;
  idNum : number;
  onDate : (value : Date | null, id : string) =>  void;
  onChange: (e: React.FormEvent<HTMLInputElement>, idNum : number, id : string) => void;
}
const InputForm:React.FC<InputFormProps> = (
  {elementConfig, valid, value, rule, onDate,onChange, idNum, id}
  ) => {

  return (
    <div className = {classes.InputWrapper}>
      {
        (id === 'join_date' || id === 'birth')  ?
        <DatePicker
          id = {elementConfig.name}
          onChange = {(date) => onDate(date, id)}
          dateFormat = "yyyy-MM-dd"
          selected = {value}
          placeholderText= {elementConfig.placeholder}
        />
         :
         <input
         type = "text"
         value = {value}
         name = {elementConfig.name}
         placeholder = {elementConfig.placeholder}
         onChange = {(e) => onChange(e, idNum, id)}
         style = {valid ? {'border' : '0.5px solid green'} : {'border' : '0.5px solid red'}}
       />
      }
    </div>

  )
}
export default InputForm;