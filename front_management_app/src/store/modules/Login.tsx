import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from 'libs/createRequestSaga';
import * as api from 'libs/api';


const [
  LOGIN, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE
] = createRequestActionTypes('login/LOGIN');


const SET_INFO = 'login/SET_INFO'
const LOGGED_IN = 'Login/LOGGED_IN';
const LOG_OUT_REQUEST = 'Login/LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'Login/LOG_OUT-SUCCESS';
const LOG_OUT_FAILURE = 'Login/LOG_OUT_FAILURE';

export const LoginActions = {
  LoginReq : createAction(LOGIN , ({
    email, password
  }: { email: string, password : string}) => ({
    email, password
  })),
  Logged_In: createAction<boolean>(LOGGED_IN),
  setInfo : createAction(SET_INFO, ({name, value} : any) =>( {
    name, value
  })),
  Log_Out_Request: createAction<boolean>(LOG_OUT_REQUEST),
  Log_Out_Success: createAction<boolean>(LOG_OUT_SUCCESS),
  Log_Out_Failure: createAction<boolean>(LOG_OUT_FAILURE),
};

type Logged_In = ReturnType<typeof LoginActions.Logged_In>;
type SetInfo = ReturnType<typeof LoginActions.setInfo>;
type Log_Out_Request = ReturnType<typeof LoginActions.Log_Out_Request>;
type Log_Out_Success = ReturnType<typeof LoginActions.Log_Out_Success>;
type Log_Out_Failure = ReturnType<typeof LoginActions.Log_Out_Failure>;

const setLoginReq = createRequestSaga(LOGIN, api.loginRequest)
export function* setLoginSaga() {
  yield takeLatest(LOGIN, setLoginReq)
};

export type userInfoType = {
  email: string,
  password : string,
}
export type LoginState = {
  isLoggedIn: boolean;
  userInfo:  any ;
  auth : null  | any,
  authError : null | any,
};

const initialState: LoginState = {
  isLoggedIn: false,
  userInfo: {
    email: '',
    password : ''
  },
  auth : null,
  authError :null
};

const Login = handleActions<LoginState, any>(
  {
    [SET_INFO] : ( state, {payload : {name, value}}) => {
      return produce(state, draft => {
        console.log(name,value )
        draft.userInfo[name] = value;

      })
    },
    [LOGIN_SUCCESS] : (state, {payload :auth}) => {
      return produce(state, draft => {
        console.log(auth)
      })
    },
    [LOGIN_FAILURE] : (state, action) => {
      return produce(state, draft => {
        console.log(action)
      })
    }
  },
  initialState,
);

export default Login;
