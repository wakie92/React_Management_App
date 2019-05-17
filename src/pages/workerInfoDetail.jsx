import React from 'react';
import Layout from 'components/UI/Layout'
import WorkerInfoComponent from 'components/WorkerInfoDetail';
import MainContentsHeader from 'components/UI/Main/MainContentsHeader';

const workerInfoDetail =  () => {
  return (
    <>
      <Layout pageType = 'Detail'>
        <MainContentsHeader/>
        <WorkerInfoComponent/>
      </Layout>
    </>
  )
}
export default workerInfoDetail;