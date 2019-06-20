import { handleActions, Action } from 'redux-actions';
import { createStandardAction } from 'typesafe-actions';
import { fromJS } from 'immutable';

const ISLOGGED_IN = 'Login/ISLOGGEDIN';
const LOG_OUT = 'Login/LOGOUT';

export const isLoggedIn = createStandardAction(ISLOGGED_IN)<boolean>();
export const logOut = createStandardAction(LOG_OUT)<string>();

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

const initialState: LoginState = fromJS({
  isLoggedIn: false,
  loginUser: {
    token: null,
    userEmail: null,
    error: null,
    loading: false,
  },
});

export default handleActions<any>(
  {
    [ISLOGGED_IN]: (state, action: Action<isLoggedIn>): LoginState => {
      return state.set('isLoggedIn', true);
    },
    [LOG_OUT]: (state, action: Action<logOut>): LoginState => {
      return state
        .setIn(['loginUser', 'userEmail'], null)
        .setIn(['loginUser', 'token'], null)
        .set('isLoggedIn', false);
    },
  },
  initialState,
);
