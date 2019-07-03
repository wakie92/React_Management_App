import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

const LOG_IN_REQUEST = 'Login/LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'Login/LOG_IN-SUCCESS';
const LOG_IN_FAILURE = 'Login/LOG_IN_FAILURE';

const LOGGED_IN = 'Login/LOGGED_IN';

const LOG_OUT_REQUEST = 'Login/LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'Login/LOG_OUT-SUCCESS';
const LOG_OUT_FAILURE = 'Login/LOG_OUT_FAILURE';

export const LoginActions = {
  Log_In_Request: createAction<boolean>(LOG_IN_REQUEST),
  Log_In_Success: createAction(LOG_IN_SUCCESS),
  Log_In_Failure: createAction<boolean>(LOG_IN_FAILURE),

  Logged_In: createAction<boolean>(LOGGED_IN),
 
  Log_Out_Request: createAction<boolean>(LOG_OUT_REQUEST),
  Log_Out_Success: createAction<boolean>(LOG_OUT_SUCCESS),
  Log_Out_Failure: createAction<boolean>(LOG_OUT_FAILURE),
};

type Log_In_Request = ReturnType<typeof LoginActions.Log_In_Request>;
type Log_In_Success = ReturnType<typeof LoginActions.Log_In_Success>;
type Log_In_Failure = ReturnType<typeof LoginActions.Log_In_Failure>;

type Logged_In = ReturnType<typeof LoginActions.Logged_In>;

type Log_Out_Request = ReturnType<typeof LoginActions.Log_Out_Request>;
type Log_Out_Success = ReturnType<typeof LoginActions.Log_Out_Success>;
type Log_Out_Failure = ReturnType<typeof LoginActions.Log_Out_Failure>;

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

const Login = handleActions<LoginState, any>(
  {
    [LOG_IN_REQUEST]: (state, action: Log_In_Request) => {
      return produce(state, draft => {
        draft.isLoggedIn = action.payload;
        console.log(action.payload);
      });
    },
    [LOG_IN_SUCCESS]: (state, action: Log_In_Success) => {
      return produce(state, draft => {
        if (draft.userInfo != null) return (draft.userInfo = action.payload);
      });
    },
    [LOG_IN_FAILURE]: (state, action: Log_In_Failure) => {
      return produce(state, draft => {
        draft.isLoggedIn = action.payload;
      });
    },
    [LOGGED_IN]: (state, action: Logged_In) => {
      return produce(state, draft => {
        draft.isLoggedIn = action.payload;
      });
    },
    [LOG_OUT_REQUEST]: (state, action: Log_Out_Request) => {
      return produce(state, draft => {
        draft.isLogggedOut = action.payload;
      });
    },
    [LOG_OUT_SUCCESS]: (state, action: Log_Out_Success) => {
      return produce(state, draft => {
        draft.isLogggedOut = action.payload;
      });
    },
    [LOG_OUT_FAILURE]: (state, action: Log_Out_Failure) => {
      return produce(state, draft => {
        draft.isLogggedOut = action.payload;
      });
    },
  },
  initialState,
);

export default Login;

// export default (
//   state = initialState,
//   action: { type: any; data: string | null },
// ) => {
//   return produce(state, draft => {
//     switch (action.type) {
//       case Log_In_Request: {
//         console.log(action);
//         draft.isLoggedIn = true;
//         break;
//       }
//       case Log_In_Success: {
//         draft.isLoggedIn = true;
//         draft.userInfo = action.data;
//         break;
//       }
//       case Log_In_Failure: {
//         draft.isLoggedIn = false;
//         draft.userInfo = null;
//         break;
//       }
//       case Log_Out_Request: {
//         draft.isLogggedOut = true;
//         break;
//       }
//       case Log_Out_Success: {
//         draft.isLogggedOut = true;
//         draft.userInfo = null;
//         break;
//       }
//       case Log_Out_Failure: {
//         draft.isLogggedOut = false;
//         break;
//       }
//       default: {
//         break;
//       }
//     }
//   });
// };

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

// [Log_In_Request] (state, {payload : {email, password}} : ) => {
//   return (state, draft => {

//   })
