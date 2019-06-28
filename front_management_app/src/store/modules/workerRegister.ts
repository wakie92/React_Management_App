import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';


const SET_USER_DATA = 'board/SET_USER_DATA';

export const userRegisterActions = {
  setUserData: createAction(SET_USER_DATA),
};

type SetUserData = ReturnType<typeof userRegisterActions.setUserData>;

export type RegisterState = {
  workerName?: string;
  email?: string;
  salary?: number;
  join_date?: string;
  birth?: string;
  grade?: string;
};

const initialState: RegisterState = {
    email: undefined,
    workerName: undefined,
    salary: undefined,
    join_date: undefined,
    grade: undefined,
    birth: undefined,
};
const userRegister = handleActions<RegisterState, any>(
  {
    [SET_USER_DATA]: (state, action: SetUserData) => {
      return produce(state, draft => {
        const { value, name } = action.payload;
        // switch(name) {
        //   case 'email':
        //     return draft.email = value;
        //   case 'salary':
        //     return draft.salary = value;
        //   case 'join_date':
        //     return draft.join_date = value;
        //   case 'birth':
        //     return draft.birth = value;
        //   case 'grade':
        //     return draft.grade = value;
        //   case 'workerName':
        //     return draft.workerName = value;
        //   default :
        //   return ;
        //  }
      });
    },
  },
  initialState,
);
export default userRegister;
