import React, { useCallback } from 'react';
import Layout from 'components/UI/Layout';
import WorkerInfoDetailContainer from 'containers/WorkerInfoDetailContainer';
import MainContentsHeader from 'components/UI/Main/MainContentsHeader';
import WorkerInfoAttendanceContainer from 'containers/WorkerInfoAttendanceContainer';
import workers from 'libs/staffInfo.json';
import { useSelector, useDispatch } from 'react-redux';
import { WorkerState } from 'store/modules/workers';

const workerInfoDetail: React.FC = ({ match }: any) => {
  let infoType: string = match.url.substr(12, 10);
  const id:number = parseInt(match.params.id)
  console.log(typeof id)
  return (
    <>
      <Layout pageType="Detail">
        <MainContentsHeader />
        {infoType === 'attendance' ? (
          <WorkerInfoAttendanceContainer matchData={match} workers={workers} />
        ) : (
          <WorkerInfoDetailContainer id={id} />
        )}
      </Layout>
    </>
  );
};
export default workerInfoDetail;
