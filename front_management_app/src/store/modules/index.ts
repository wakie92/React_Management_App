import { combineReducers } from 'redux';
import board, { boardState  } from './board';
import workers ,{ WorkerState } from './workers';

export type StoreState = {
  board: boardState;
  workers: WorkerState;
}

const rootReducer = combineReducers<StoreState>({
  board,
  workers
})
export default rootReducer; 