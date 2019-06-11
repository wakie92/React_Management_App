import React from 'react';
import WorkersListContainer from 'containers/WorkersListContainer';
import Layout from 'components/UI/Layout';
import MainContentsHeader from 'components/UI/Main/MainContentsHeader';
import workers from 'libs/staffInfo.json';

const workersList: React.FC =  () => {
  return (
    <>
      <Layout pageType = 'List'>
        <MainContentsHeader/>
        <WorkersListContainer staffList = {workers}/>
      </Layout>
    </>
  )
}
export default workersList;