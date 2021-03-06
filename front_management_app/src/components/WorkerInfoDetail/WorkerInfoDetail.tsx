import React, { useEffect } from 'react';
import MainWorkerDetailInfo from 'components/UI/Main/MainWorkerDetailInfo';
import MainContentsSubHeader from 'components/UI/Main/MainContentsSubHeader';
import { WorkerInfo } from 'store/modules/workers';

interface DetailInfoProps {
  staffInfo: null | WorkerInfo;
  idNumber: number;
}

const WorkerInfoDetail: React.FC<DetailInfoProps> = ({
  staffInfo,
  idNumber,
}) => {
  return (
    <>
      <MainContentsSubHeader id={idNumber} />
      {staffInfo === null ? (
        <MainWorkerDetailInfo />
      ) : (
        <MainWorkerDetailInfo
          staffId={<p>{staffInfo.id}</p>}
          staffName={<p>{staffInfo.name}</p>}
          staffBirth = {<p>{staffInfo.birth}</p>}
          staffEmail = {<p>{staffInfo.email}</p>}
          staffGrade = {<p>{staffInfo.grade}</p>}
          staffJoinDate = {<p>{staffInfo.join_date}</p>}
          staffAddress = {<p>{staffInfo.address}</p>}
          staffLeavDate ={<p>{staffInfo.leave_date}</p>}
          staffSalary = {<p>{staffInfo.salary}</p>}
          staffWorkingYear = {<p>{staffInfo.working_year}</p>}
        />
      )}
    </>
  );
};
export default WorkerInfoDetail;
