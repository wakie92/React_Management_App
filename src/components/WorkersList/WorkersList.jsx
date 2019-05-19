import React from 'react';
import classes from './WorkersList.module.scss';

const WorkersList = () => {

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
        <div className={classes.Workerlist_bar}>
          <div className={classes.Content_photo}></div>
          <div className={classes.Content_name}>홍길동</div>
          <div className={classes.Content_grade}>대리</div>
          <div className={classes.Content_info}></div>
          <div className={classes.Content_iconbox}>
            <div className={classes.Content_ID}></div>
            <div className={classes.Content_phone}></div>
            <div className={classes.Content_date}></div>
          </div>
        </div>   
        <div className={classes.Workerlist_bar}>
          <div className={classes.Content_photo}></div>
          <div className={classes.Content_name}>홍길동</div>
          <div className={classes.Content_grade}>대리</div>
          <div className={classes.Content_info}></div>
          <div className={classes.Content_iconbox}>
            <div className={classes.Content_ID}></div>
            <div className={classes.Content_phone}></div>
            <div className={classes.Content_date}></div>
          </div>
        </div>
        <div className={classes.Workerlist_bar}>
          <div className={classes.Content_photo}></div>
          <div className={classes.Content_name}>홍길동</div>
          <div className={classes.Content_grade}>대리</div>
          <div className={classes.Content_info}></div>
          <div className={classes.Content_iconbox}>
            <div className={classes.Content_ID}></div>
            <div className={classes.Content_phone}></div>
            <div className={classes.Content_date}></div>
          </div>
        </div>
        <div className={classes.Workerlist_bar}>
          <div className={classes.Content_photo}></div>
          <div className={classes.Content_name}>홍길동</div>
          <div className={classes.Content_grade}>대리</div>
          <div className={classes.Content_info}></div>
          <div className={classes.Content_iconbox}>
            <div className={classes.Content_ID}></div>
            <div className={classes.Content_phone}></div>
            <div className={classes.Content_date}></div>
          </div>
        </div>          
      </div>
    </>
  )
}
export default WorkersList;