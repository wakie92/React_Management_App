import React from 'react';
import classes from './WorkersList.module.scss';

const WorkersList = () => {

  return (
    <>
      <div className={classes.Category_bar}>
        <div className={classes.Category_menu1}>사원번호</div>
        <div className={classes.Category_menu2}>성명</div>
        <div className={classes.Category_menu3}>직급</div>
        <div className={classes.Category_menu4}>전화번호</div>
        <div className={classes.Category_menu5}>입사일자</div>
      </div>
    </>
  )
}
export default WorkersList;