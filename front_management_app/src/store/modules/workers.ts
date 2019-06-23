import { createStandardAction } from 'typesafe-actions';
import { handleActions } from 'redux-actions';
import { produce } from 'immer';
import { ReactElement } from 'react';

const WORKERS_LIST = 'workers/WORKERS_LIST';
const COUNT = 'workers/COUNT';
const INCREMENT = 'workers/INCREMENT';
const SELECTED_INFO_TYPE = 'workers/SELECTED_INFO_TYPE';
const SELECTED_INFO = 'workers/SELECTED_INFO'
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
  workersList: createStandardAction(WORKERS_LIST)<WorkerInfo>(),
  count: createStandardAction(COUNT)<number>(),
  increment: createStandardAction(INCREMENT)<void>(),
  selectedInfoType : createStandardAction(SELECTED_INFO_TYPE)<string>(),
  selectedInfo : createStandardAction(SELECTED_INFO)<boolean>()
};

type Increment = ReturnType<typeof workersActions.increment>;
type SelectedInfoType = ReturnType<typeof workersActions.selectedInfoType>
type SelectedInfo = ReturnType<typeof workersActions.selectedInfo>
export type WorkerState = {
  WorkerList: WorkerInfo[];
  count: number;
  selectedInfoType:string;
  selectedInfo:boolean;
};

const initialState: WorkerState = {
  WorkerList: [
    {
      id: 1,
      name: '홍길동',
      email: 'hong@email.com',
      password: 'hong1',
      user_type: 'U',
      address: '서울시 동대문구 회기동',
      salary: 2500000,
      profile_image: null,
      birth: '90.02.25',
      join_date: '16.08.12',
      leave_date: null,
      working_year: 48,
      grade: '대리',
      half_vacation: 2,
      year_vacation: 2,
      total_year_vacation: 15,
    },
    {
      id: 2,
      name: '문재영',
      email: 'moon@email.com',
      password: 'moon1',
      user_type: 'U',
      address: '서울시 동대문구 청량리동',
      salary: 2700000,
      profile_image: null,
      birth: '86.02.25',
      join_date: '15.08.12',
      leave_date: null,
      working_year: 48,
      grade: '과장',
      half_vacation: 1,
      year_vacation: 2,
      total_year_vacation: 15,
    },
    {
      id: 3,
      name: '김진영',
      email: 'kim@email.com',
      password: 'kim1',
      user_type: 'U',
      address: '서울시 동대문구 제기동',
      salary: 2200000,
      profile_image: null,
      birth: '92.02.25',
      join_date: '17.08.12',
      leave_date: null,
      working_year: 18,
      grade: '사원',
      half_vacation: 6,
      year_vacation: 2,
      total_year_vacation: 15,
    },
    {
      id: 4,
      name: '최진영',
      email: 'choi@email.com',
      password: 'choi1',
      user_type: 'U',
      address: '서울시 동대문구 휘경동',
      salary: 3000000,
      profile_image: null,
      birth: '85.02.25',
      join_date: '14.08.12',
      leave_date: null,
      working_year: 40,
      grade: '과장',
      half_vacation: 6,
      year_vacation: 2,
      total_year_vacation: 15,
    },
    {
      id: 5,
      name: '박동석',
      email: 'park@email.com',
      password: 'park1',
      user_type: 'M',
      address: '서울시 동대문구 전농동',
      salary: 6200000,
      profile_image: null,
      birth: '66.02.25',
      join_date: '80.08.12',
      leave_date: null,
      working_year: 26,
      grade: '이사',
      half_vacation: 4,
      year_vacation: 4,
      total_year_vacation: 15,
    },
    {
      id: 6,
      name: '이경구',
      email: 'lee@email.com',
      password: 'lee1',
      user_type: 'U',
      address: '서울시 동대문구 신설동',
      salary: 5200000,
      profile_image: null,
      birth: '70.02.25',
      join_date: '17.08.12',
      leave_date: null,
      working_year: 80,
      grade: '부장',
      half_vacation: 1,
      year_vacation: 2,
      total_year_vacation: 15,
    },
  ],
  count: 0,
  selectedInfoType : '',
  selectedInfo : false
};

const workers = handleActions<WorkerState, any>(
  {
    [INCREMENT]: (state, action: Increment) => {
      return produce(state, draft => {
        draft.count = action.payload + 1;
      });
    },
    [SELECTED_INFO_TYPE] : (state, action:SelectedInfoType)=> {
      return produce(state, draft => {
        console.log(action.payload)
        draft.selectedInfoType = action.payload;
      })
    },
    [SELECTED_INFO] : (state,action :SelectedInfo ) => {
      return produce(state, draft => {
        draft.selectedInfo = action.payload
      })
    }
  },
  initialState,
);
export default workers;
