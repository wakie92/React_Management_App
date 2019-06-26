import { handleActions, createAction } from 'redux-actions';
import { produce } from 'immer';

const ISLOGGED_IN = 'Login/ISLOGGEDIN';
const LOG_OUT = 'Login/LOGOUT';

export const isLoggedIn = createAction<boolean>(ISLOGGED_IN);
export const logOut = createAction<string>(LOG_OUT);

type isLoggedIn = ReturnType<typeof isLoggedIn>;
type logOut = ReturnType<typeof logOut>;

export type LoginState = {
  isLoggedIn: boolean;
  loginUser: {
    token: string | null;
    userEmail: string | null;
    error: string | null;
    loading: boolean;
  };
};

const initialState: LoginState = {
  isLoggedIn: false,
  loginUser: {
    token: null,
    userEmail: null,
    error: null,
    loading: false,
  },
};

export default handleActions<LoginState, any>(
  {
    [ISLOGGED_IN]: (state, action: isLoggedIn) => {
      return produce(state, draft => {
        draft.isLoggedIn = action.payload;
      });
    },
    [LOG_OUT]: (state, action: logOut) => {
      return produce(state, draft => {
        draft.loginUser.userEmail = null;
          draft.loginUser.token = null;
          draft.isLoggedIn = false;
      });
    },
  },
  initialState,
);
