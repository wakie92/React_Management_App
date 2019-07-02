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
export type InputType = {
    id : string,
    inputType : {
      elementType: string,
      elementConfig: {
        name: string,
        placeholder: string,
      },
      value: any,
      validation: {
        required: boolean,
      },
      valid: boolean,
      errorMessage : string
    },
};
export type RegisterPayloadType = {
  key: RegisterFormType;
  value: any;
};

const SET_USER_DATA = 'workerRegister/SET_USER_DATA';
const SET_INPUT_ELE_MSG = 'workerRegister/SET_INPUT_ELE_MSG';
const SET_INPUT_FORM = 'workerRegister/SET_INPUT_FORM';
const SET_INPUT_DATA = 'workerRegister/SET_INPUT_DATA';
const SET_VALID = 'workerRegister/SET_VALID';

export const userRegisterActions = {
  setUserData: createAction(SET_USER_DATA, ({ key, value }: any) => ({
    key,
    value,
  })),
  setInputData: createAction(SET_INPUT_DATA),
  setInputEleErrMsg: createAction(SET_INPUT_ELE_MSG),
  setInputForm: createAction(SET_INPUT_FORM),
  setValid : createAction(SET_VALID)
};

type SetUserData = ReturnType<typeof userRegisterActions.setUserData>;
type SetInputData = ReturnType<typeof userRegisterActions.setInputData>;
type SetInputEleErrMsg = ReturnType<
  typeof userRegisterActions.setInputEleErrMsg
>;
type SetInputForm = ReturnType<typeof userRegisterActions.setInputForm>;
type SetValid = ReturnType<typeof userRegisterActions.setValid>
export type RegisterState = {
  register: any;
  inputData: null | InputType[];
  inputType: {};
};
const initialState: RegisterState = {
  register: {
    email: '',
    workerName: '',
    salary: 0,
    join_date: '',
    grade: '',
    birth: '',
  },
  inputData: null,
  inputType: 
    {
      elementType: 'input',
      elementConfig: {
        name: '',
        placeholder: '',
      },
      validation: {
        required: true,
      },
      valid: false,
      errorMessage : ''
    },
};
const userRegister = handleActions<RegisterState, any>(
  {
    [SET_USER_DATA]: (state, { payload: { value, key } }: SetUserData) => {
      return produce(state, draft => {
        draft.register[key] = value;
      });
    },
    [SET_INPUT_DATA]: (state, action: SetInputData) => {
      return produce(state, draft => {
        if(draft.inputData === null) {
          draft.inputData = action.payload
        }
      });
    },
    [SET_VALID] : (state, {payload : {idNum, validCheck}} : SetValid) => {
      return produce(state, draft => {
        if(draft.inputData !== null){
          console.log(draft.inputData[idNum].inputType.valid)
          draft.inputData[idNum].inputType.valid = validCheck;
        }
      })
    }
  },
  initialState,
);
export default userRegister;
