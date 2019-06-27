import React, { Component, useEffect } from 'react';
import WorkerInFoDetail from 'components/WorkerInfoDetail';
import { WorkerState, WorkerInfo, workersActions } from 'store/modules/workers';
import { connect, useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StoreState } from 'store/modules';
import axios from 'axios-base';
import { getWorkerInfo } from 'libs/api';


interface IProps {
  id: number;
  workersList : null | WorkerInfo[];
  WorkerActions: typeof workersActions;
}
interface IState {}
class WorkerInfoDetailContainer extends Component<IProps, IState> {
  componentDidMount() {
    const { id, WorkerActions}  = this.props
    getWorkerInfo(id).then(list => WorkerActions.loadWorker(list));
    // axios.get(`/users/${id}`).then((res) =>  {return WorkerActions.loadWorker(res.data)})
  }
  render() {
    console.log(this.props)
    return <div />;
  }
}

export default connect(
  ({workers} : StoreState) =>({
    workersList : workers.workerList
  }),
  (dispatch) => ({
    WorkerActions : bindActionCreators(workersActions,dispatch)})
  )(WorkerInfoDetailContainer);

// return <WorkerInFoDetail idNumber={matchData.params.id} staffInfo={staff} />;
