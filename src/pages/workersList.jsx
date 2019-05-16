import React from 'react';
import WorkersList from 'components/WorkersList';
import Layout from 'components/UI/Layout';

const workersList =  () => {
  return (
    <>
      <Layout pageType = 'List'>
        <WorkersList/>
      </Layout>
    </>
  )
}
export default workersList;