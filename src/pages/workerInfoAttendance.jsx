import React from 'react';
import Layout from 'components/UI/Layout'
import WorkerInfoAttComponent from 'components/WorkerInfoAttendance';
import MainContentsHeader from 'components/UI/Main/MainContentsHeader';

const WorkerInfoAttendance = () => {
  return (
    <Layout pageType = 'Attendance'>
      <MainContentsHeader/>
      <WorkerInfoAttComponent/>
    </Layout>
  )
}
export default WorkerInfoAttendance;