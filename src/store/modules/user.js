import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

//액션타입 정의
const GET_STAFFSLIST = 'user/GET_STAFFSLIST';

//액션생성함수
export const getstaffList = createAction(GET_STAFFSLIST);

const initialState = fromJS({
  staffList : []
})

//리듀서
export default handleActions({
  [GET_STAFFSLIST] : (state, action) => {
    console.log('sdf');
  }
},initialState);