import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActioncreators }from 'redux';
import * as workerListActions from 'store/modules/user';
import WorkerList from 'components/WorkerList';
class WorkerListContainer extends Component {


  render() {
    return (
      <WorkerList/>
    );
  }
}

export default connect((state) =>({

}),
  (dispatch) => ({
    WorkerListActions : bindActioncreators(workerListActions, dispatch )
}))(WorkerListContainer);