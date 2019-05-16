import React from 'react';
import classes from './NoticeBoard.module.scss';
import NoticeItem from './NoticeItem';
const NoticeBoard = () => {

  return (
    <div className = {classes.BoardWrapper}>
      <div className = {classes.BoardHeader}>
        사원여러분께 알려드립니다.
      </div>
      <div className = {classes.BoardSection}>
        <span className = {classes.Title}>제목</span>
        <span className = {classes.RegDate}>등록일</span>
      </div>
      <div className = {classes.BoardList}> 
        <NoticeItem/>
        <NoticeItem/>
        <NoticeItem/>
        <NoticeItem/>
        <NoticeItem/>
        <NoticeItem/>
        <NoticeItem/>
        <NoticeItem/>
      </div>
    </div>
  )
}
export default NoticeBoard;