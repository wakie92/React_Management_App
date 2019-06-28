import { combineReducers } from 'redux';
import board, { boardState } from './board';
import workers, { WorkerState } from './workers';
import Login, { LoginState } from './Login';
import userRegister, { RegisterState } from './workerRegister';

export type StoreState = {
  board: boardState;
  workers: WorkerState;
  Login: LoginState;
  userRegister: RegisterState;
};

const rootReducer = combineReducers<StoreState>({
  board,
  workers,
  userRegister,
  Login,
});
export default rootReducer;
