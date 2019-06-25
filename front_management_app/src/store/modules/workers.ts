// import { createStandardAction, ActionType, } from 'typesafe-actions';
import { handleActions, createAction } from 'redux-actions';
import { produce } from 'immer';
import { ReactElement } from 'react';
import * as api from 'libs/api'
import { AxiosResponse } from 'axios';

const WORKERS_LIST = 'workers/WORKERS_LIST';
const COUNT = 'workers/COUNT';
const INCREMENT = 'workers/INCREMENT';
const SELECTED_INFO_TYPE = 'workers/SELECTED_INFO_TYPE';
const SELECTED_INFO = 'workers/SELECTED_INFO';

export type WorkerInfo = {
  id: number;
  name: string;
  email: string;
  user_type: string;
  password: string;
  address: string;
  salary: number;
  profile_image: null;
  birth: string;
  join_date: string;
  leave_date: null;
  working_year: number;
  grade: string;
  half_vacation: number;
  year_vacation: number;
  total_year_vacation: number;
};
export const workersActions = {
  getWorkersList: createAction<WorkerInfo[]>(WORKERS_LIST, api.getWorkers),
  count: createAction<number>(COUNT),
  increment: createAction<number>(INCREMENT),
  selectedInfoType: createAction<string>(SELECTED_INFO_TYPE),
  selectedInfo: createAction<boolean>(SELECTED_INFO),
};

type GetWorkersList = ReturnType<typeof workersActions.getWorkersList>;
type SelectedInfoType = ReturnType<typeof workersActions.selectedInfoType>;
type SelectedInfo = ReturnType<typeof workersActions.selectedInfo>;
// type Actions = Increment | SelectedInfoType | SelectedInfo;

export type WorkerState = {
  WorkerList: WorkerInfo[];
  count: number;
  selectedInfoType: string;
  selectedInfo: boolean;
};

const initialState: WorkerState = {
  WorkerList: [],
  count: 0,
  selectedInfoType: '',
  selectedInfo: false,
};

const workers = handleActions<WorkerState, any>(
  {
    [WORKERS_LIST]: (state, action:GetWorkersList) => {
      return produce(state, draft => {
        console.log(action)
        draft.WorkerList = action.payload;
      });
    },
    [SELECTED_INFO_TYPE]: (state, action: SelectedInfoType) => {
      return produce(state, draft => {
        console.log(action.payload);
        draft.selectedInfoType = action.payload;
      });
    },
    [SELECTED_INFO]: (state, action: SelectedInfo) => {
      return produce(state, draft => {
        draft.selectedInfo = action.payload;
      });
    },
  },
  initialState,
);
export default workers;
