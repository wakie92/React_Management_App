import React, { Component, } from 'react';
import WorkerInFoDetail from 'components/WorkerInfoDetail';
import { WorkerInfo, workersActions } from 'store/modules/workers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StoreState } from 'store/modules';
import { getWorkerInfo } from 'libs/api';
import WorkerInfoAttendance from 'components/WorkerInfoAttendance';


interface IProps {
  id: number;
  infoType : string;
  worker : null | WorkerInfo;
  WorkerActions: typeof workersActions;
}
interface IState {}
class WorkerInfoDetailContainer extends Component<IProps, IState> {
  
  componentDidMount() {
    const { id, WorkerActions}  = this.props
    getWorkerInfo(id).then(list => WorkerActions.loadWorker(list));
  }
  componentWillUnmount() {
    const { WorkerActions}  = this.props
    WorkerActions.unLoadWorker();
  }
  render() {
    const {infoType, id, worker} = this.props
    return (
    <>
      {
        infoType === 'attendance' ? 
        <WorkerInfoAttendance idNumber = {id} staffInfo = {worker}/>
        :
        <WorkerInFoDetail idNumber={id} staffInfo={worker} />
      }
    </>)
  }
}

export default connect(
  ({workers} : StoreState) =>({
    worker : workers.worker
  }),
  (dispatch) => ({
    WorkerActions : bindActionCreators(workersActions,dispatch)})
  )(WorkerInfoDetailContainer);

// return <WorkerInFoDetail idNumber={matchData.params.id} staffInfo={staff} />;
