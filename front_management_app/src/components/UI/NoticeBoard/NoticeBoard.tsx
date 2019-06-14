import React, { useState } from 'react';
import classes from './NoticeBoard.module.scss';
import PageNation from './NoticePageNation';
import {NavLink} from 'react-router-dom';
interface BoardProps {
  noticeIdx: number;
}
const NoticeBoard: React.FC<BoardProps> = ({ children, noticeIdx }) => {
  return (
    <div className={classes.BoardWrapper}>
      <div className={classes.BoardHeader}>사원여러분께 알려드립니다.</div>
      <div className={classes.BoardList}>{children}</div>
      <PageNation
        changingMode={
          !noticeIdx ? (
            <>
              <span> &#60;&#60; </span>
              <span> &#60; </span>
              <span> 1 </span>
              <span> &#62; </span>
              <span> &#62;&#62; </span>
            </>
          ) : (
            <NavLink to = {`/notice`}><p>목록으로</p></NavLink>
          )
        }
      />
    </div>
  );
};
export default NoticeBoard;
