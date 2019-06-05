import React from 'react';
import MainWorkerDetailInfo from 'components/UI/Main/MainWorkerDetailInfo';
import MainContentsSubHeader from 'components/UI/Main/MainContentsSubHeader';

const WorkerInfoDetail = ({staffInfo})=> {
  return (
    <>
      <MainContentsSubHeader/>
      <MainWorkerDetailInfo staffInfo= {staffInfo}/>
    </>
  )
}
export default WorkerInfoDetail;