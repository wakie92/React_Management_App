import { createActions, handleActions, Action } from 'redux-actions';
import { fromJS } from 'immutable';

const ISLOGGED_IN = 'Login/ISLOGGEDIN';
const LOGOUT = 'Login/LOGOUT';

type isLoggedInPayload = boolean;
type LogOutPayload = string;

export interface LoginState {
  isLoggedIn: boolean;
  loginUser: {
    token: string | null;
    userEmail: string | null;
    error: string | null;
    loading: boolean;
  };
}

export const loginActions = {
  isLoggedIn: createActions<isLoggedInPayload>(ISLOGGED_IN),
  logout: createActions<LogOutPayload>(LOGOUT),
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
    [ISLOGGED_IN]: (state, action: Action<isLoggedInPayload>): LoginState => {
      return state.set('isLoggedIn', true);
    },
    [LOGOUT]: (state, action: Action<LogOutPayload>): LoginState => {
      return state
        .setIn(['loginUser', 'userEmail'], null)
        .setIn(['loginUser', 'token'], null)
        .set('isLoggedIn', false);
    },
  },
  initialState,
);
