import api from 'axios-base';
import { WorkerInfo } from 'store/modules/workers';

export const getWorkers = () => api.get<GetWorkersResponse>(`/users/`)
export type GetWorkersResponse = {users : WorkerInfo[]}
export const getWorkerInfo = (id: number) => {
  return api.get(`/users/${id}`).then(res => res.data);
};
export const updateNewWorker = (data: any) => api.post<UpdateNewWorkerResponse>(`/users/enroll`, data)
export type UpdateNewWorkerResponse = { message : string }

export const loginRequest = (value : LoginReqType ) => api.post<LoginResType>(`/users/login`, value)
export type LoginReqType = {email : string, password : string} ;
export type LoginResType = { message : string }