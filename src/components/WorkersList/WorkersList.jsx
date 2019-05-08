import React from 'react';
import classes from './WorkersList.module.scss';
import Aside from 'components/UI/Aside'
import Main from 'components/UI/Main';
const WorkersList = () => {

  return (
    <div className = {classes.Layout}>
      <Aside/>
      <Main/>
    </div>
  )
}
export default WorkersList;