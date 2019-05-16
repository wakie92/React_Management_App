import React from 'react';
import Layout from 'components/UI/Layout'
import WorkerInfoComponent from 'components/WorkerInfoDetail';

const workerInfoDetail =  () => {
  return (
    <>
      <Layout pageType = 'Detail'>
        <WorkerInfoComponent/>
      </Layout>
    </>
  )
}
export default workerInfoDetail;