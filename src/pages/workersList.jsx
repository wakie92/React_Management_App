import React from 'react';
import WorkersListContainer from 'containers/WorkerListContainer';
import Layout from 'components/UI/Layout';
import MainContentsHeader from 'components/UI/Main/MainContentsHeader';

const workersList =  () => {
  return (
    <>
      <Layout pageType = 'List'>
        <MainContentsHeader/>
        <WorkersListContainer/>
      </Layout>
    </>
  )
}
export default workersList;