import React from 'react';
import classes from './WorkersList.module.scss';
import ListInfoContainer from 'containers/WorkerInfoContainer';
const WorkersList = ({staffList}) => {

  const listOfStaff = staffList.map((staff) => {
    return (
      <ListInfoContainer
          staff = {staff}
          key = {staff.id}
        /> 
    )
  })
  return (
    <>
      <div className={classes.Workerlist_layout}>
        <div className={classes.Category_bar}>
          <div className={classes.Category_name}>성명</div>
          <div className={classes.Category_grade}>직급</div>
          <div className={classes.Category_ID}>사원번호</div>
          <div className={classes.Category_phone}>전화번호</div>
          <div className={classes.Category_date}>입사일자</div>
        </div>        
        {listOfStaff}      
      </div>
    </>
  )
}

export default WorkersList;