import React, { useState, useEffect, useCallback } from 'react';
import WorkerInFoDetail from 'components/WorkerInfoDetail';

interface DetailContainerProps {
  matchData: any;
  workers: any;
}
const WorkerInfoDetailContainer: React.FC<DetailContainerProps> = ({
  matchData,
  workers,
}) => {
  const [staff, setStaff] = useState();
  let staffId = Number.parseInt(matchData.params.id);
  useEffect(() => {
    workers.filter((staff: any) => {
      return staff.id === staffId ? setStaff(staff) : null;
    });
  }, [staff]);
  return <WorkerInFoDetail idNumber={matchData.params.id} staffInfo={staff} />;
};
export default WorkerInfoDetailContainer;
