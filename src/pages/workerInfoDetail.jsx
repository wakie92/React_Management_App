import React from 'react';
import Layout from 'components/UI/Layout'
import WorkerInfoDetailContainer from 'containers/WorkerInfoDetailContainer';
import MainContentsHeader from 'components/UI/Main/MainContentsHeader';
import workers from 'libs/staffInfo';

const workerInfoDetail =  ({match}) => {
  return (
    <>
      <Layout pageType = 'Detail' >
        <MainContentsHeader/>
        <WorkerInfoDetailContainer matchData = {match} workers = {workers}/>
      </Layout>
    </>
  )
}
export default workerInfoDetail;