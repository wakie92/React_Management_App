import { handleActions } from 'redux-actions';
import { createStandardAction } from 'typesafe-actions';
import produce from 'immer';
//action
const SET_BOARD_LIST = 'board/SET_BOARD_LIST';
const TEST = 'board/TEST';

//type
export type BoardContent = {
  id: number;
  title: string;
  content: string;
};

// interface immutable 상속 받기.
export interface BoardState {
  setBoardList: null | BoardContent[]
  test : string,
}

//action 생성 함수
export const boardActions = {
  setBoardList: createStandardAction(SET_BOARD_LIST)<BoardContent>(),
  test: createStandardAction(TEST)<string>(),
};

export type BoardStateType = {
  setBoardList: null | BoardContent[];
  test: string;
};

type SetBoardList = ReturnType<typeof boardActions.setBoardList>;
//initialState
const initialState: BoardStateType = {
  setBoardList: [
    {
      id: 1,
      title: 'sdfsdf',
      content: 'wepoweirpweorioewpr',
    },
  ],
  test: 'testing',
};

const boardReducer = handleActions<BoardStateType, any>(
  {

  },
  initialState,
);

export default boardReducer;
