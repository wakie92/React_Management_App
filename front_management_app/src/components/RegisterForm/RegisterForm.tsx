import React from 'react';
import classes from './RegisterForm.module.scss';
import { RegisterState } from 'store/modules/workerRegister';

interface FormProps {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  data: RegisterState;
}
const RegisterForm: React.FC<FormProps> = ({ onChange, onSubmit, data }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="workerName"
        placeholder="name"
        value={data.workerName}
        onChange={onChange}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={onChange}
        value={data.email}
      />
      <input
        type="text"
        name="salary"
        placeholder="salary"
        onChange={onChange}
        value={data.salary}
      />
      <input
        type="text"
        name="birth"
        placeholder="birth"
        onChange={onChange}
        value={data.birth}
      />
      <input
        type="text"
        name="join_date"
        placeholder="join_date"
        onChange={onChange}
        value={data.join_date}
      />
      <input
        type="text"
        name="grade"
        placeholder="grade"
        onChange={onChange}
        value={data.grade}
      />
    </form>
  );
};
export default RegisterForm;
