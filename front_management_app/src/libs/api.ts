import api from 'axios-base';
import { WorkerInfo } from 'store/modules/workers';
export const getWorkers = api
  .get(`/users`)
  .then(res => {
    return res.data;
  })
  .catch(e => console.log(e));
export const getWorkerInfo = (id: number) => {
  return api.get(`/users/${id}`).then(res => res.data);
};
export const updateNewWorker = (data: any) => api.post<UpdateNewWorkerResponse>(`/users/enroll`, data)
export type UpdateNewWorkerResponse = { message : string }