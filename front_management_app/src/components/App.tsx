import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Home,
  WorkersList,
  WorkerInfoDetail,
  WorkerRegister,
  Notice,
  Editor,
  ErrorPage,
} from 'pages';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/workerslist" component={WorkersList} />
          <Route
            exact
            path="/workerinfo/detail/:id"
            component={WorkerInfoDetail}
          />
          <Route
            exact
            path="/workerinfo/attendance/:id"
            component={WorkerInfoDetail}
          />
          <Route exact path="/notice" component={Notice} />
<<<<<<< HEAD
          <Route exact path="/notice/post" component={Editor} />
          <Route exact path="/notice/:id" component={Notice} />
          <Route exact path="/register" component={WorkerRegister} />
=======
          <Route exact path="/notice/:id" component={Notice} />
          <Route exact path="/notice/post" component={Editor} />
>>>>>>> 24f613179ee77b02a83a42bfe86d7a6cee97b146
          <Route component={ErrorPage} />
        </Switch>
      </>
    );
  }
}
export default App;
