import React from 'react';
import classes from './MainContentsHeader.module.scss';
import { NavLink } from 'react-router-dom';
const MainContentsHeader: React.FC = () => {
  return (
    <div className = {classes.ContentsHeader}>
      <div className = {classes.Worker}>
        <span className = {classes.WorkerGrade}>Master</span>
        <span className = {classes.WorkerName}>Seo HyunDeock</span>
      </div>
      <div className = {classes.FunctionIcon}>
        <NavLink to = {`/register`}><span>사원등록</span></NavLink>
        <div className = {classes.WorkerStatus}>
          * active
        </div>
        <span className = {classes.ResetInput}>@</span>
        <span className = {classes.EditInput}> %</span>
        <span className = {classes.Delete}> --</span>
      </div>
    </div>
  )
}
export default MainContentsHeader;
