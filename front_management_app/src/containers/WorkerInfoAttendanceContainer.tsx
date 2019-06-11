import React, { useState, useEffect } from 'react';
import WorkerInfoAttendance from 'components/WorkerInfoAttendance'

interface AttendanceContainerProps {
  matchData: any;
  workers: any;
}
const WorkerInfoAttendanceContainer:React.FC<AttendanceContainerProps> = ({
  matchData,
  workers
}) => {
  const [staff, setStaff] = useState();
  let staffId = Number.parseInt(matchData.params.id);
  useEffect(() => {
    workers.filter((staff:any) => {
      return staff.id === staffId ? setStaff(staff): null
    })
  }, [staff]);
  return (
    <WorkerInfoAttendance idNumber = {matchData.params.id} staffInfo = {staff}/>
  )
};
export default WorkerInfoAttendanceContainer;
