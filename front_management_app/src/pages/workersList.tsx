import React from 'react';
import WorkersListContainer from 'containers/WorkersListContainer';
import Layout from 'components/UI/Layout';
import MainContentsHeader from 'components/UI/Main/MainContentsHeader';

const workersList: React.FC =  () => {
  return (
    <>
      <Layout pageType = 'List'>
        <MainContentsHeader/>
        <WorkersListContainer />
      </Layout>
    </>
  )
}
export default workersList;