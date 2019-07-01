import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';

export interface RegisterFormType {
  workerName: string;
  email: string;
  salary: number;
  join_date: string;
  birth: string;
  grade: string;
  errorMessage: string;
}
export type ErrorType = {
  emailErr: string;
  workerNameErr: string;
  salaryErr: string;
  joinDateErr: string;
  gradeErr: string;
  birthErr: string;
};
export type RegisterPayloadType = {
  key: RegisterFormType;
  value: any;
};
// export interface InputForm {
//   type : string;
//   required : boolean;
//   onChange : (e : React.FormEvent<HTMLInputElement>) =>void;
//   placeholder : string;
//   value : string;
//   name : string;
// }
const SET_USER_DATA = 'workerRegister/SET_USER_DATA';
const SET_ERROR_MESSAGE = 'workerRegister/SET_ERROR_MESSAGE';
const SET_INPUT_ELE_MSG ='workerRegister/SET_INPUT_ELE_MSG';
const SET_INPUT_FORM = 'workerRegister/SET_INPUT_FORM';
export const userRegisterActions = {
  setUserData: createAction(SET_USER_DATA, ({ key, value }: any) => ({
    key,
    value,
  })),
  setErrorMessage : createAction(SET_ERROR_MESSAGE),
  setInputEleErrMsg : createAction(SET_INPUT_ELE_MSG)
};

type SetUserData = ReturnType<typeof userRegisterActions.setUserData>;
type SetErrorMessage = ReturnType<typeof userRegisterActions.setErrorMessage>;
type setInputEleErrMsg = ReturnType<typeof userRegisterActions.setInputEleErrMsg>;

export type RegisterState = {
  register: any;
  validation: ErrorType;
  inputType : any;
};
const initialState: RegisterState = {
  register: {
    email: '',
    workerName: '',
    salary: 0,
    join_date: '',
    grade: '',
    birth: '',
    errorMessage: '',
  },
  validation: {
    emailErr: '',
    workerNameErr: '',
    salaryErr: '',
    joinDateErr: '',
    gradeErr: '',
    birthErr: '',
  },
  inputType : {
    elementType : 'input',
    elementConfig : {
      type : '',
      placeholder : '',
    },
    value : '',
    validation : {
      required : true,
    },
    valid : false,
  }
};
const userRegister = handleActions<RegisterState, any>(
  {
    [SET_USER_DATA]: (state, { payload: { value, key } }: SetUserData) => {
      return produce(state, draft => {
        draft.register[key] = value;
      });
    },
    [SET_ERROR_MESSAGE] : (state, action :SetErrorMessage) => {
      return produce(state, draft => {
        draft.register.errorMessage = action.payload;
      })
    }
  },
  initialState,
);
export default userRegister;
