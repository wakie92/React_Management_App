import { combineReducers } from 'redux';
import { BoardState, boardReducer as board } from './board';

export interface StoreState {
  board: BoardState;
}

const rootReducer = combineReducers<StoreState>({
  board,
});
export default rootReducer;
