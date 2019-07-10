import React from 'react';
import classes from './WorkersList.module.scss';
import ListInfoContainer from 'containers/WorkerInfoContainer';
import { WorkerInfo } from 'store/modules/workers';

interface WorkerListProps {
  staffList: undefined | WorkerInfo[];
}

const WorkersList: React.FC<WorkerListProps> = ({
  staffList,
}) => {
  console.log(staffList);
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
        <ul>
          {
            staffList === undefined ? 
            <div className = {classes.EmptyBox}></div>
            :
            staffList.map(staff => {
            return <ListInfoContainer staff = {staff} key={staff.id} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default WorkersList;
