import React from 'react';
import MainWorkerInfoAttendance from 'components/UI/Main/MainWorkerInfoAttendance';
import MainContentsSubHeader from 'components/UI/Main/MainContentsSubHeader';
interface AttendanceContainerProps {
  idNumber: any;
  staffInfo: any;
}
const WorkerInfoAttendance: React.FC<AttendanceContainerProps> = ({
  idNumber,
  staffInfo,
}) => {
  return (
    <>
      <MainContentsSubHeader id={idNumber} />
      {staffInfo === undefined ? (
        <MainWorkerInfoAttendance />
      ) : (
        <MainWorkerInfoAttendance
          totalYV={<p>{staffInfo.total_year_vacation}</p>}
          usedYV={<p>{staffInfo.year_vacation}</p>}
          leftYV={
            <p>{staffInfo.total_year_vacation - staffInfo.year_vacation}</p>
          }
        />
      )}
    </>
  );
};
export default WorkerInfoAttendance;
