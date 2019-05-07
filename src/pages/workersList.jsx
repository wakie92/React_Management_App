import React from 'react';
import WorkersList from 'components/WorkersList';
import Background from 'components/UI/Background';
const workersList =  () => {
  return (
    <>
      <Background>
        <WorkersList/>
      </Background>
    </>
  )
}
export default workersList;