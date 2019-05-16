import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import {
  Home,
  WorkersList,
  WorkerInfoDetail,
  WorkerInfoAttendance,
  Notice
} from 'pages'

class App extends Component {
  render() {
    return (
      <>
          <Switch> 
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/workerslist' component = {WorkersList} />
            <Route exact path = '/workerinfo/detail' component = {WorkerInfoDetail} />
            <Route exact path = '/workerinfo/attendance' component = {WorkerInfoAttendance} />
            <Route exact path = '/notice' component = {Notice} />
          </Switch>
      </>
    );
  }
}
export default App;