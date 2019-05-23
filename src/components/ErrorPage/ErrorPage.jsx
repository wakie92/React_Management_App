import React from 'react';
import classes from './ErrorPage.module.scss';

const ErrorPage = () => {

  return (
    <>
      <div className={classes.Error_layout}>
        <div className={classes.textbox}>
          404 Error <br/> Page not found
        </div>
      </div>
    </>
  )  
}

export default ErrorPage;