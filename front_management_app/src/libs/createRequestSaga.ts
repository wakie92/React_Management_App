import { call, put} from 'redux-saga/effects';
import { LoadingActions } from 'store/modules/loading';

export const createRequestActionTypes = (type:string) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE]
}

export default function createRequestSaga(type:string, request:any){
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`
  return function*(action: any){
    yield put(LoadingActions.startLoading(type))
    try {
      const res = yield call(request, action.payload)
      yield put({
        type : SUCCESS,
        payload : res.data,
        meta : res
      });
    } catch(e) {
      const { status, data} = e.response
      yield put({
        type : FAILURE,
        payload :({status, data}),
        error : true
      })
    }
    yield put (LoadingActions.finishLoading(type))
  }
}

