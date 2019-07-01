import React from 'react';
import classes from './Register.module.scss';


const Register: React.FC = ({children}) => {
  return (
    <div className = {classes.Wrapper}>
      {children}
    </div>
  )
};
export default Register;
