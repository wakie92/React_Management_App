import React from 'react';
import classes from './NoticePageNation.module.scss';

const NoticePageNation: React.FC = () => {

  return(
    <>
      {/* <hr/> */}
      <div className = {classes.PageNationWrapper}>
        <div className = {classes.PageNationBox}>
          <span> &#60;&#60; </span>
          <span> &#60; </span>
          <span>  1 </span>
          <span> &#62; </span>
          <span> &#62;&#62; </span>
        </div>
      </div>
    </>
  )
}
export default NoticePageNation;