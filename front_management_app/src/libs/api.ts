import api from 'axios-base';
import { WorkerInfo } from 'store/modules/workers';
export const getWorkers = api.get(`/users`).then((res) => {res.data.map((data:WorkerInfo) => {return data}) }).catch(e =>  console.log(e));
