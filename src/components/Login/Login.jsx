import React, { Fragment } from 'react';
import classes from './Login.module.scss';

const Login = () => {
    return (
        <Fragment>
            <div className={classes.login_outbox}>
                <div className={classes.login_input}>
                    <ul>
                        <li>Welcome Back</li>
                        <li>계정</li>
                        <input type="text" />
                        <li>비밀번호</li>
                        <input type="password" />
                    </ul>
                    <div>버튼자리</div>
                </div>
                <div className={classes.picture}>abcd</div>
            </div>
        </Fragment>
    )
}

export default Login;