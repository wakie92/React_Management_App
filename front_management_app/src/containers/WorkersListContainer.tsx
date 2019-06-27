import React, { Component } from 'react';
import WorkerList from 'components/WorkersList';
import { bindActionCreators } from 'redux';
import { StoreState } from 'store/modules';
import { connect } from 'react-redux';
import { WorkerInfo, workersActions } from 'store/modules/workers';
import axios from 'axios-base';
interface Iprops {
  workersList: null | WorkerInfo[];
  count: number;
  WorkerActions: typeof workersActions;
  // BoardActions : typeof boardListActions;
}
interface IState {}

class WorkersListContainer extends Component<Iprops, IState> {
  handleCount = () => {
    const { WorkerActions, count } = this.props;
    WorkerActions.increment(count);
  };
  componentDidMount() {
    const {WorkerActions, workersList } = this.props;
    workersList === null  &&
    axios.get('/users/').then(res => {
      return WorkerActions.getWorkersList(res.data)
    })
  }
  render() {
    const { workersList, count } = this.props;
    return (
      <WorkerList
        staffList={workersList}
        count={count}
        handleCount={this.handleCount}
      />
    );
  }
}

export default connect(
  ({ workers, board }: StoreState) => ({
    workersList: workers.workerList,
    count: workers.count,
  }),
  dispatch => ({
    WorkerActions: bindActionCreators(workersActions, dispatch),
  }),
)(WorkersListContainer);
