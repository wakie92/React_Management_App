import React from 'react';
import classes from './RegisterForm.module.scss';
import Button from '../UI/Button';

interface FormProps {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  data: any;
  errorMsg : JSX.Element
}
const RegisterForm: React.FC<FormProps> = ({ onChange, onSubmit, data ,errorMsg}) => {
  return (
    <form className={classes.formContainer} onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          name="workerName"
          placeholder="NAME"
          value={data.workerName}
          onChange={onChange}
        />
        {errorMsg}
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="EMAIL"
          onChange={onChange}
          value={data.email}
        />
        <p>에러메세지</p>
      </div>
      <div>
        <input
          type="text"
          name="salary"
          placeholder="SALARY"
          onChange={onChange}
          value={data.salary}
        />
        <p>에러메세지</p>
      </div>
      <div>
        <input
          type="text"
          name="birth"
          placeholder="BIRTH"
          onChange={onChange}
          value={data.birth}
        />

        <p>에러메세지</p>
      </div>
      <div>
        <input
          type="text"
          name="join_date"
          placeholder="JOIN_DATE"
          onChange={onChange}
          value={data.join_date}
        />
        <p>에러메세지</p>
      </div>
      <div>
        <input
          type="text"
          name="grade"
          placeholder="GRADE"
          onChange={onChange}
          value={data.grade}
        />
        <p>에러메세지</p>
      </div>
      <Button btnType="register" btnValue="가입" />
    </form>
  );
};
export default RegisterForm;
