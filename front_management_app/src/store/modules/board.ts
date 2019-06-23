import { handleActions } from 'redux-actions';
import { createStandardAction } from 'typesafe-actions';
import produce from 'immer';

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

const board = handleActions<boardState, any>(
  {
    [INCREMENT]: (state, action: Increment) => {
      console.log(action.payload);
      return produce(state, draft => {
        draft.count = action.payload + 1;
      });
    },
  },
  initialState,
);
export default board;
