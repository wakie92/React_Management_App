import { combineReducers } from 'redux';
import board, { boardState } from './board';
import workers, { WorkerState } from './workers';
import Login, { LoginState } from './Login';

export type StoreState = {
  board: boardState;
  workers: WorkerState;
  Login: LoginState;
};

const rootReducer = combineReducers<StoreState>({
  board,
  workers,
  Login,
});
export default rootReducer;
