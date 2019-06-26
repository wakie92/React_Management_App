import React, { Component } from 'react';
import WorkerList from 'components/WorkersList';
import { bindActionCreators } from 'redux';
import { StoreState } from 'store/modules';
import { connect } from 'react-redux';
import { WorkerInfo, workersActions } from 'store/modules/workers';
import { boardListActions } from 'store/modules/board';

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
    workersList: workers.WorkerList,
    count: workers.count,
  }),
  dispatch => ({
    WorkerActions: bindActionCreators(workersActions, dispatch),
    // BoardActions : bindActionCreators(boardListActions,dispatch)
  }),
)(WorkersListContainer);
