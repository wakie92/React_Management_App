import React from 'react';
import classes from './MainContentsSubHeader.module.scss';

const MainContentsSubHeader = () => {

  return (
    <div className = {classes.SubHeaderWrapper}>
      <div className = {classes.CurPage}>
        <span>신상정보</span> 
        <span>근태정보</span>
      </div>
      <div className = {classes.Line}>
      </div>
    </div>
  )
}
export default MainContentsSubHeader;