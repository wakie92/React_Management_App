import React from 'react';
import classes from './Register.module.scss';
import Button from '../UI/Button';
interface registerProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Register: React.FC<registerProps> = ({onSubmit,children}) => {
  return (
    <div className = {classes.Wrapper}>
      {children}
      <Button btnType="register" btnValue="가입" clicked = {onSubmit}/>
    </div>
  )
};
export default Register;
