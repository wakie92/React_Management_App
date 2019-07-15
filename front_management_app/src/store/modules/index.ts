import { combineReducers } from 'redux';
import board, { boardState } from './board';
import workers, { WorkerState, getWorkersListSaga } from './workers';
import login, { LoginState, setLoginSaga } from './login';
import userRegister, { RegisterState, setDataSaga } from './workerRegister';
import loading, { LoadingState } from './loading';
import {all} from 'redux-saga/effects'
export type StoreState = {
  board: boardState;
  workers: WorkerState;
  login: LoginState;
  userRegister: RegisterState;
  loading : LoadingState;
};

const rootReducer = combineReducers<StoreState>({
  board,
  workers,
  userRegister,
  login,
  loading,
});

export function* rootSaga() {
  yield all([setDataSaga(), setLoginSaga(), getWorkersListSaga()])
}
export default rootReducer;
