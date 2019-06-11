import React from 'react';
import classes from './NoticeItem.module.scss';

const NoticeItem: React.FC = () => {

  return (
    <>
      <div className = {classes.NoticeItemWrapper}>
        <span className = {classes.NoticeTitle}>제모긴아런이런이ㅏ런ㅇ린어린어린ㅇ</span>
        <span className = {classes.NoticeDate}>2019.05.10</span>
      </div>
      <hr className = {classes.NoticeItemHr}/>
    </>
  )
}

export default NoticeItem;