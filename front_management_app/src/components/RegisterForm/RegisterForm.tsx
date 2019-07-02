import React from 'react';
import classes from './RegisterForm.module.scss';
import Button from '../UI/Button';

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
const RegisterForm: React.FC<FormProps> = ({ onSubmit, children}) => {
  return (
    <form className={classes.formContainer} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
export default RegisterForm;
