import { combineReducers } from 'redux';
import board, { boardState } from './board';
import workers, { WorkerState } from './workers';
import Login, { LoginState } from './Login';
import userRegister, { RegisterState, setDataSaga } from './workerRegister';
import loading, { LoadingState } from './loading';
import {all} from 'redux-saga/effects'
export type StoreState = {
  board: boardState;
  workers: WorkerState;
  Login: LoginState;
  userRegister: RegisterState;
  loading : LoadingState;
};

const rootReducer = combineReducers<StoreState>({
  board,
  workers,
  userRegister,
  Login,
  loading,
});

export function* rootSaga() {
  yield all([setDataSaga()])
}
export default rootReducer;
