import React from 'react';
import classes from './InputForm.module.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
interface InputFormProps {
  elementConfig: { name: string; placeholder: string };
  value: any;
  valid: boolean;
  rule: { required: boolean };
  id: string;
  idNum: number;
  onDate: (value: Date | null, idNum : number,  id: string) => void;
  onChange: (
    e: React.FormEvent<HTMLInputElement>| React.FormEvent<HTMLSelectElement>,
    idNum: number,
    id: string,
  ) => void;
}
const InputForm: React.FC<InputFormProps> = ({
  elementConfig,
  valid,
  value,
  onDate,
  onChange,
  idNum,
  id,
}) => {
  console.log(valid);
  return (
    <div
      className={classes.InputWrapper}
      style={
        valid ? { border: '0.5px solid green' } : { border: '0.5px solid red' }
      }
    >
      {id === 'join_date' || id === 'birth' ? (
        <DatePicker
          id={elementConfig.name}
          onChange={date => onDate(date, idNum, id)}
          dateFormat="yyyy-MM-dd"
          selected={value}
          placeholderText={elementConfig.placeholder}
        />
      ) : id === 'grade' ?
        (<select value = {value} onChange = {e => onChange(e, idNum , id)}>
          <option value = {''} defaultValue = {''}>------GRADE------</option>
          <option value = '신입' >신입</option>
          <option value = '대리' >대리</option>
          <option value = '과장' >과장</option>
          <option value = '팀장' >팀장</option>
         </select>)
      : (
        <input
          type="text"
          value={value}
          name={elementConfig.name}
          placeholder={elementConfig.placeholder}
          onChange={e => onChange(e, idNum, id)}
        />
      )}
    </div>
  );
};
export default InputForm;
