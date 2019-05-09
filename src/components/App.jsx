import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import {
  Home,
  WorkersList,
  Login
} from 'pages'

class App extends Component {
  render() {
    return (
      <>
        <Switch> 
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/workerslist' component = {WorkersList} />
          <Route exact path = '/login' component = {Login} />
        </Switch>
      </>
    );
  }
}
export default App;