import { createStore, combineReducers } from 'redux';
import rootReducer from './modules';

const configure = () =>
  createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default configure;
