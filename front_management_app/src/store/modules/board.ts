// import { createActions, handleActions, Action } from 'redux-actions';
import { createStandardAction } from 'typesafe-actions';
import { fromJS } from 'immutable';

//action
const SET_BOARD_LIST = 'board/SET_BOARD_LIST';
const TEST = 'board/TEST';

//type
export type BoardContent = {
  id: number;
  title: string;
  content: string;
};


//interface immutable 상속 받기.
export interface BoardState {
  setBoardList: null | BoardContent[]
  test : string,
  get : any
}

//action 생성 함수
export const setBoardList = createStandardAction(SET_BOARD_LIST)<
  BoardContent
>();
export const test = createStandardAction(TEST)<string>();
type SetBoardList = ReturnType<typeof setBoardList>;
//initialState
const initialState: BoardState = fromJS({
  setBoardList: [
    {
      id: 1,
      title: 'sdfsdf',
      content: 'wepoweirpweorioewpr',
    },
  ],
  test: "testing"
});

//reducer
export const boardReducer = (state = initialState, action : any ) => {
  switch(action.type) {
    case  SET_BOARD_LIST:
    return {
      ...state 
    }
    default :   
    return state;
  }
}

export default boardReducer;