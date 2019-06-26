import React, { useState, useEffect, useCallback } from 'react';
import WorkerInFoDetail from 'components/WorkerInfoDetail';
import { useSelector, useDispatch } from 'react-redux';
import { WorkerState, WorkerInfo,workersActions } from 'store/modules/workers';

interface DetailContainerProps {
  matchData: any;
}
const WorkerInfoDetailContainer: React.FC<DetailContainerProps> = ({
  matchData,
}) => {
  const [staff, setStaff] = useState();
  let staffId = Number.parseInt(matchData.params.id);
  const { workerList } = useSelector((state: WorkerState) => state);
  const dispatch = useDispatch();
  // const Data = useCallback(() => dispatch({type : get}) ,[dispatch])
  // console.log(Data());
  // const { workerList } = useSelector((state: WorkerState) => state);
  console.log(workerList);
  useEffect(() => {
    // dispatch(workersActions.getWorkersList)
  }, []);
  return <WorkerInFoDetail idNumber={matchData.params.id} staffInfo={staff} />;
};
export default WorkerInfoDetailContainer;
