import api from 'axios-base';
import { WorkerInfo } from 'store/modules/workers';
export const getWorkers = () => {
  let users:WorkerInfo[] = [];
  api.get(`/users`).then(res => {
    users = res.data;
    console.log(users)
  });
  return users;
};
