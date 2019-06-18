import { createStore, combineReducers } from 'redux';
import * as modules from './modules';

const reducers = combineReducers(modules);

const configure = () =>
  createStore(
    reducers,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default configure;
