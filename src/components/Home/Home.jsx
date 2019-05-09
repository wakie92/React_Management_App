import React, { Fragment } from 'react';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <Fragment>
      <div className={classes.Home_outbox}>
        <div className={classes.Home_input}>
          <ul className={classes.Home_message}>
            <li>Welcome Back</li>
          </ul>
          <ul>
            <li>계정</li>
            <input type="text" />
            <li>비밀번호</li>
            <input type="password" />
          </ul>
          <div>버튼자리</div>
        </div>
        <div className={classes.Picture}>abcd</div>
      </div>
    </Fragment>
  )
}

export default Home;