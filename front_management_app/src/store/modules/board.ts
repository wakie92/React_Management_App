import { createActions, handleActions, Action } from 'redux-actions';
import { createStandardAction } from 'typesafe-actions';
import { fromJS } from 'immutable';

//action
const SET_BOARD_LIST = 'board/SET_BOARD_LIST';
//type
export type BoardContent = {
  id: number;
  title: string;
  content: string;
};

// export type BoardActionTypes  

//interface
export interface BoardState {
  setBoardList: null | BoardContent[]
}
//action 생성 함수
export const setBoardList = createStandardAction(SET_BOARD_LIST)<
  BoardContent
>();

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