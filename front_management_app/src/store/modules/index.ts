import { combineReducers } from 'redux';
import board, { BoardState  } from './board';

export interface StoreState {
  board: BoardState;
}

const rootReducer = combineReducers<StoreState>({
  board
})
export default rootReducer; 