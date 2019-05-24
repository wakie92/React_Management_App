import React from 'react';
import classes from './ListInfo.module.scss';

const ListInfo = ({id,selectedInfo, clicked, name, grade, joinDate, email}) => {
  return (
    <>
      <div className={classes.Workerlist_bar}>
        <div className={classes.Content_photo}></div>
        <div className={classes.Content_name}>{name}</div>
        <div className={classes.Content_grade}>{grade}</div>
        <div className={classes.Content_info}>{selectedInfo}</div>
        <div className={classes.Content_iconbox}>
          <div className={classes.Content_ID} 
               onClick = {()=> clicked(id,"id")}>
            {id}
          </div>
          <div className={classes.Content_phone} 
               onClick = {()=> clicked(email,"email")}>
            {email}
          </div>
          <div className={classes.Content_date} 
               onClick = {()=> clicked(joinDate,"joinDate")}>
            {joinDate}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListInfo;