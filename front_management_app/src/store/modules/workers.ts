// import { createStandardAction, ActionType, } from 'typesafe-actions';
import { handleActions, createAction, createActions } from 'redux-actions';
import { produce } from 'immer';
import * as api from 'libs/api';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from 'libs/createRequestSaga';

const LOAD_WORKER = 'workers/LOAD_WORKER';
const UNLOAD_WORKER = 'workers/UNLOAD_WORKER';
const COUNT = 'workers/COUNT';
const INCREMENT = 'workers/INCREMENT';
const SELECTED_INFO_TYPE = 'workers/SELECTED_INFO_TYPE';
const SELECTED_INFO = 'workers/SELECTED_INFO';
const POST_NEW_WORKER = 'workerRegister/POST_NEW_WORKER';

// const [ GET_WORKERS_LIST, 
//         GET_WORKERS_LIST_SUCCESS, 
//         GET_WORKERS_LIST_FAILURE] = createRequestActionTypes('workers/GET_WORKERS_LIST')
const [ GET_LIST, 
        GET_LIST_SUCCESS, 
        GET_LIST_FAILURE] = createRequestActionTypes('workers/GET_LIST')

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
  // getWorkersList: createAction(GET_WORKERS_LIST),
  getList : createAction(GET_LIST),
  selectedInfoType: createAction<string, string>(
    SELECTED_INFO_TYPE,
    selectedInfoType => selectedInfoType,
  ),
  selectedInfo: createAction<boolean>(SELECTED_INFO),
  loadWorker : createAction<WorkerInfo>(LOAD_WORKER),
  unLoadWorker : createAction(UNLOAD_WORKER),
  postNewWorker : createAction(POST_NEW_WORKER, api.updateNewWorker)

};
// type GetWorkersList = ReturnType<typeof workersActions.getWorkersList>;
type SelectedInfoType = ReturnType<typeof workersActions.selectedInfoType>;
type SelectedInfo = ReturnType<typeof workersActions.selectedInfo>;
type LoadWorker = ReturnType<typeof workersActions.loadWorker>;
type UnLoadWorker = ReturnType<typeof workersActions.unLoadWorker>;
type PostNewWorker = ReturnType<typeof workersActions.postNewWorker>;

const getWorkersListSG = createRequestSaga(GET_LIST, api.getWorkers)
export function* getWorkersListSaga() {
  console.log('startSaga')
  yield takeLatest(GET_LIST,getWorkersListSG);
}


export type WorkerState = {
  workerList: undefined | WorkerInfo[];
  count: number;
  selectedInfoType: string;
  selectedInfo: boolean;
  worker: null | WorkerInfo;
};

const initialState: WorkerState = {
  workerList: undefined,
  count: 0,
  selectedInfoType: '',
  selectedInfo: false,
  worker: null,
};

const workers = handleActions<WorkerState, any>(
  {
    // [GET_WORKERS_LIST]: (state, action: GetWorkersList) => {
    //   return produce(state, draft => {
    //     console.log(action);
    //     draft.workerList = action.payload;
    //   });
    // },
    [GET_LIST_SUCCESS] :(state, {payload : data} ) => {
      return produce(state, draft => {
        console.log(data)
      })
    },
    [GET_LIST_FAILURE] :(state, {payload : data} ) => {
      return produce(state, draft => {
        console.log(data)
      })
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
        draft.worker = data
      })
    },
    [UNLOAD_WORKER] : (state, action : UnLoadWorker) => {
      return produce(state, draft => {
        draft.worker = null;
      })
    },
    [POST_NEW_WORKER] : (state, action : PostNewWorker) => {
      return produce(state, draft => {
        console.log(action.payload);
        // draft.workerList.push(action.payload)
      })
    }
  },
  initialState,
);
export default workers;
