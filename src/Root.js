import React from 'react';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configure from 'store/configure';

const store = configure();

function Root() {
  return (
    <Provider store = {store} >
      <BrowserRouter>
        <App/>
      </BrowserRouter>
      </Provider>
  );
}

export default Root;
