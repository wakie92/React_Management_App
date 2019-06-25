import React, { Component } from 'react';
import WorkerList from 'components/WorkersList';
import { bindActionCreators } from 'redux';
import { StoreState } from 'store/modules';
import { connect } from 'react-redux';
import { WorkerInfo, workersActions } from 'store/modules/workers';

interface Iprops {
  workersList: WorkerInfo[];
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
    this.props.WorkerActions.getWorkersList()
  }
  render() {
    const { workersList, count } = this.props;
    console.log(workersList)
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
    workersList: workers.WorkerList,
    count: workers.count,
  }),
  dispatch => ({
    WorkerActions: bindActionCreators(workersActions, dispatch),
  }),
)(WorkersListContainer);
