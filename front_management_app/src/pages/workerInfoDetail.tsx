import React from 'react';
import Layout from 'components/UI/Layout';
import WorkerInfoDetailContainer from 'containers/WorkerInfoDetailContainer';
import MainContentsHeader from 'components/UI/Main/MainContentsHeader';
import WorkerInfoAttendanceContainer from 'containers/WorkerInfoAttendanceContainer';
import workers from 'libs/staffInfo.json';

const workerInfoDetail: React.FC = ({ match }: any) => {
  let infoType: string = match.url.substr(12, 10);
  const id:number = parseInt(match.params.id)
  return (
    <>
      <Layout pageType="Detail">
        <MainContentsHeader />
          <WorkerInfoDetailContainer id={id} infoType = {infoType}/>
      </Layout>
    </>
  );
};
export default workerInfoDetail;
