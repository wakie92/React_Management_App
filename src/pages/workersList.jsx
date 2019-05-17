import React from 'react';
import WorkersList from 'components/WorkersList';
import Layout from 'components/UI/Layout';
import MainContentsHeader from 'components/UI/Main/MainContentsHeader';

const workersList =  () => {
  return (
    <>
      <Layout pageType = 'List'>
        <MainContentsHeader/>
        <WorkersList/>
      </Layout>
    </>
  )
}
export default workersList;