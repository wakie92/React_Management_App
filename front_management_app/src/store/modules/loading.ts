import { createStandardAction, createReducer } from 'typesafe-actions';

const START_LOADING = 'loading/START_LOADING'
const FINISH_LOADING = 'loading/FINISH_LOADING'


export const LoadingActions = {
  startLoading : createStandardAction(START_LOADING, (requestType : boolean) => requestType)<boolean>(),
  finishLoading : createStandardAction(FINISH_LOADING, (requestType : boolean)  => requestType)<boolean>(),
}

type StartLoading = ReturnType<typeof LoadingActions.startLoading>
type FinishLoading = ReturnType<typeof LoadingActions.finishLoading>
export type LoadingState = {}

const initialState:LoadingState = {}

const loading = createReducer<LoadingState, any>(initialState, {
  [START_LOADING] : (state : LoadingState, action: StartLoading) => ({
    [action.payload] : true
  }),
  [FINISH_LOADING] : (state, action : FinishLoading) => ({
    [action.payload] : false
  })
})

export default loading;