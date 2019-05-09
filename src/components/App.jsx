import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import {
  Home,
  WorkersList
} from 'pages'

class App extends Component {
  render() {
    return (
      <>
        <Switch> 
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/workerslist' component = {WorkersList} />
        </Switch>        
      </>
    );
  }
}
export default App;