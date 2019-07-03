// import { createStandardAction, ActionType, } from 'typesafe-actions';
import { handleActions, createAction } from 'redux-actions';
import { produce } from 'immer';
import * as api from 'libs/api';

const GET_WORKERS_LIST = 'workers/GET_WORKERS_LIST';
const LOAD_WORKER = 'workers/LOAD_WORKER';
const UNLOAD_WORKER = 'workers/UNLOAD_WORKER';
const COUNT = 'workers/COUNT';
const INCREMENT = 'workers/INCREMENT';
const SELECTED_INFO_TYPE = 'workers/SELECTED_INFO_TYPE';
const SELECTED_INFO = 'workers/SELECTED_INFO';

export type WorkerInfo = {
  id: number;
  name: string;
  email: string;
  user_type: string;
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
  // 밑에 방법은 왜안되는지 무슨차이인지 알아내기
  // getWorkersList: createAction<Promise<void>>(GET_WORKERS_LIST,api.getWorkers),
  getWorkersList: createAction<WorkerInfo[]>(GET_WORKERS_LIST),
  count: createAction<number>(COUNT),
  increment: createAction<number>(INCREMENT),
  selectedInfoType: createAction<string, string>(
    SELECTED_INFO_TYPE,
    selectedInfoType => selectedInfoType,
  ),
  selectedInfo: createAction<boolean>(SELECTED_INFO),
  loadWorker: createAction(LOAD_WORKER),
};
type GetWorkersList = ReturnType<typeof workersActions.getWorkersList>;
type SelectedInfoType = ReturnType<typeof workersActions.selectedInfoType>;
type SelectedInfo = ReturnType<typeof workersActions.selectedInfo>;
type LoadWorker = ReturnType<typeof workersActions.loadWorker>;
export type WorkerState = {
  workerList: null | WorkerInfo[];
  count: number;
  selectedInfoType: string;
  selectedInfo: boolean;
  worker: null | WorkerInfo;
};

const initialState: WorkerState = {
  workerList: null,
  count: 0,
  selectedInfoType: '',
  selectedInfo: false,
  worker: null,
};

const workers = handleActions<WorkerState, any>(
  {
    [GET_WORKERS_LIST]: (state, action: GetWorkersList) => {
      return produce(state, draft => {
        draft.workerList = action.payload;
      });
    },
    [SELECTED_INFO_TYPE]: (state, action: SelectedInfoType) => {
      return produce(state, draft => {
        draft.selectedInfoType = action.payload;
      });
    },
    [SELECTED_INFO]: (state, action: SelectedInfo) => {
      return produce(state, draft => {
        draft.selectedInfo = action.payload;
      });
    },
    [LOAD_WORKER]: (state, action: LoadWorker) => {
      return produce(state, draft => {
        const data = action.payload;
        console.log(data);
      });
    },
  },
  initialState,
);
export default workers;
