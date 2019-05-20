import React from 'react';
import classes from './ListInfo.module.scss';

const ListInfo = () => {

  return (
    <>
      <div className={classes.Workerlist_bar}>
        <div className={classes.Content_photo}></div>
        <div className={classes.Content_name}>홍길동</div>
        <div className={classes.Content_grade}>대리</div>
        <div className={classes.Content_info}></div>
        <div className={classes.Content_iconbox}>
          <div className={classes.Content_ID}>123</div>
          <div className={classes.Content_phone}></div>
          <div className={classes.Content_date}></div>
        </div>
      </div>
    </>
  )
}

export default ListInfo;