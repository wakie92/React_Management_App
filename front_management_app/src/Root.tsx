import React from 'react';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import configure, { sagaMiddleware } from 'store/configureStore';
import { rootSaga } from 'store/modules';

const store = configure();
sagaMiddleware.run(rootSaga);

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default hot(module)(Root);
