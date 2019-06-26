import { handleActions } from 'redux-actions';
import { createStandardAction, createReducer, ActionType } from 'typesafe-actions';
import produce from 'immer';
import { updateKey } from '../utils';

export type BoardContent = {
  id: number;
  title: string;
  content: string;
};

//action
const INCREMENT = 'board/INCREMENT';
const COUNT = 'board/COUNT';
const SET_BOARD_LIST = 'board/SET_BOARD_LIST';

//action constant
export const boardListActions = {
  increment: createStandardAction(INCREMENT)<void>(),
  count: createStandardAction(COUNT)<number>(),
  boardActions: {
    setBoardList: createStandardAction(SET_BOARD_LIST)<BoardContent>(),
  },
};

//typesetting
type Increment = ReturnType<typeof boardListActions.increment>;
type Count = ReturnType<typeof boardListActions.count>;

type BoardActions = ActionType<typeof boardListActions>
export type boardState = {
  count: number;
  setBoardList: null | BoardContent[];
};

const initialState: boardState = {
  count: 0,
  setBoardList: [
    {
      id: 1,
      title: 'sdfsdf',
      content: 'wepoweirpweorioewpr',
    },
  ],
};

const board = createReducer<boardState, BoardActions>(initialState)
// .handleAction(boardListActions.increment, (state,action:Increment) => 
//   updateKey(state, 'count', action.payload)
// )
export default board;
