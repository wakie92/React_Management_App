import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';
import * as api from 'libs/api';
import createRequestSaga, {
  createRequestActionTypes,
} from 'libs/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';

const [
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
] = createRequestActionTypes('workerRegister/REGISTER_USER');

export interface RegisterFormType {
  name: string;
  email: string;
  salary: undefined | number;
  join_date: string;
  birth: string;
  grade: string;
}

export type InputType = {
  id: string;
  inputType: {
    elementConfig: {
      name: string;
      placeholder: string;
    };
    validation: {
      required: boolean;
    };
    valid: boolean;
  };
};
export type RegisterPayloadType = {
  key: RegisterFormType;
  value: any;
};

const SET_USER_DATA = 'workerRegister/SET_USER_DATA';
const SET_INPUT_DATA = 'workerRegister/SET_INPUT_DATA';
const SET_VALID = 'workerRegister/SET_VALID';
const RESET_INPUT_FORM = 'workerRegister/RESET_INPUT_FORM';

export const userRegisterActions = {
  setUserData: createAction(SET_USER_DATA, ({ key, value }: any) => ({
    key,
    value,
  })),
  register : createAction(REGISTER_USER, ({
    email, name, join_date, grade, birth, salary,
  }:RegisterFormType) => ({
    email, name, join_date, grade, birth, salary,
  })),
  setInputData: createAction(SET_INPUT_DATA),
  setValid: createAction(SET_VALID),
  resetInputForm: createAction(RESET_INPUT_FORM),
};

type SetUserData = ReturnType<typeof userRegisterActions.setUserData>;
type SetInputData = ReturnType<typeof userRegisterActions.setInputData>;
type SetValid = ReturnType<typeof userRegisterActions.setValid>;
type ResetInputForm = ReturnType<typeof userRegisterActions.resetInputForm>;

const setUserDataSaga = createRequestSaga(REGISTER_USER, api.updateNewWorker)
export function* setDataSaga() {
  yield takeLatest(REGISTER_USER, setUserDataSaga)
}
export type RegisterState = {
  register: any;
  inputData: null | InputType[];
  inputType: {};
  auth : null | any,
  authError : null | any
};
const initialState: RegisterState = {
  register: {
    email: '',
    name: '',
    salary: undefined,
    join_date: '',
    grade: '',
    birth: '',
  },
  inputData: null,
  inputType: {
    elementType: 'input',
    elementConfig: {
      name: '',
      placeholder: '',
    },
    validation: {
      required: true,
    },
    valid: false,
  },
  auth : null,
  authError : null
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
        if (draft.inputData === null) {
          draft.inputData = action.payload;
        }
      });
    },
    [SET_VALID]: (state, { payload: { idNum, validCheck } }: SetValid) => {
      return produce(state, draft => {
        if (draft.inputData !== null) {
          draft.inputData[idNum].inputType.valid = validCheck;
        }
      });
    },
    [RESET_INPUT_FORM]: (state, action: ResetInputForm) => {
      return produce(state, draft => {
        draft.register = initialState.register;
      });
    },
    [REGISTER_USER_SUCCESS] : (state, {payload : auth}) => {
      return produce(state, draft => {
        draft.auth = auth;
        draft.authError = null;
      })
    },
    [REGISTER_USER_FAILURE] : (state, {payload : authError}) => {
      return produce(state, draft => {
        draft.authError = authError;
        draft.auth = null
      })
    }
  },
  initialState,
);
export default userRegister;
