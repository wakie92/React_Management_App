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
       <div>
          <Switch> 
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/workerslist' component = {WorkersList} />
          </Switch>
        </div>
      </>
    );
  }
}
export default App;