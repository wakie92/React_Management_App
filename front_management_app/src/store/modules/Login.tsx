import { createAction } from 'redux-actions';
import { produce } from 'immer';

// const ISLOGGED_IN = 'Login/ISLOGGEDIN';
// const LOG_OUT = 'Login/LOGOUT';

// export const isLoggedIn = createAction<boolean>(ISLOGGED_IN);
// export const logOut = createAction<string>(LOG_OUT);

// type isLoggedIn = ReturnType<typeof isLoggedIn>;
// type logOut = ReturnType<typeof logOut>;

const LOG_IN_REQUEST = 'Login/LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'Login/LOG_IN-SUCCESS';
const LOG_IN_FAILURE = 'Login/LOG_IN_FAILURE';

const LOG_OUT_REQUEST = 'Login/LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'Login/LOG_OUT-SUCCESS';
const LOG_OUT_FAILURE = 'Login/LOG_OUT_FAILURE';

export const Log_In_Request = createAction<boolean>(LOG_IN_REQUEST);
export const Log_In_Success = createAction<boolean>(LOG_IN_SUCCESS);
export const Log_In_Failure = createAction<boolean>(LOG_IN_FAILURE);

export const Log_Out_Request = createAction<boolean>(LOG_OUT_REQUEST);
export const Log_Out_Success = createAction<boolean>(LOG_OUT_SUCCESS);
export const Log_Out_Failure = createAction<boolean>(LOG_OUT_FAILURE);

type Log_In_Request = ReturnType<typeof Log_In_Request>;
type Log_In_Success = ReturnType<typeof Log_In_Success>;
type Log_In_Failure = ReturnType<typeof Log_In_Failure>;

type Log_Out_Request = ReturnType<typeof Log_Out_Request>;
type Log_Out_Success = ReturnType<typeof Log_Out_Success>;
type Log_Out_Failure = ReturnType<typeof Log_Out_Failure>;

export type LoginState = {
  isLoggedIn: boolean;
  isLogggedOut: boolean;
  userInfo: null | string;
};

const initialState: LoginState = {
  isLoggedIn: false,
  isLogggedOut: false,
  userInfo: null,
};

export default (
  state = initialState,
  action: { type: any; data: string | null },
) => {
  return produce(state, draft => {
    switch (action.type) {
      case Log_In_Request: {
        draft.isLoggedIn = true;
        break;
      }
      case Log_In_Success: {
        draft.isLoggedIn = true;
        draft.userInfo = action.data;
        break;
      }
      case Log_In_Failure: {
        draft.isLoggedIn = false;
        draft.userInfo = null;
        break;
      }
      case Log_Out_Request: {
        draft.isLogggedOut = true;
        break;
      }
      case Log_Out_Success: {
        draft.isLogggedOut = true;
        draft.userInfo = null;
        break;
      }
      case Log_Out_Failure: {
        draft.isLogggedOut = false;
        break;
      }
      default: {
        break;
      }
    }
  });
};

// export default handleActions<LoginState, any>(
//   {
//     [ISLOGGED_IN]: (state, action: isLoggedIn) => {
//       return produce(state, draft => {
//         draft.isLoggedIn = action.payload;
//       });
//     },
//     [LOG_OUT]: (state, action: logOut) => {
//       return produce(state, draft => {
//         draft.loginUser.userEmail = null;
//         draft.isLoggedIn = false;
//       });
//     },
//   },
//   initialState,
// );
