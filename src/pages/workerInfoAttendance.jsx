import React from 'react';
import Layout from 'components/UI/Layout'
import WorkerInfoAttComponent from 'components/WorkerInfoAttendance'
const WorkerInfoAttendance = () => {
  return (
    <Layout pageType = 'Attendance'>
      <WorkerInfoAttComponent/>
    </Layout>
  )
}
export default WorkerInfoAttendance;