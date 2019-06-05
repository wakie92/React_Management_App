import React from 'react';
import classes from './ListInfo.module.scss';
import {TiInfoLarge, TiMail, TiCalendar} from 'react-icons/ti';
import { NavLink } from 'react-router-dom';
const ListInfo = ({id,selectedInfo, clicked, name, grade, joinDate, email}) => {
  
  return (
    <>
      <NavLink exact to ={`/workerinfo/detail/${id}`} >
        <div className={classes.Workerlist_bar}>

        <div className={classes.Content_photo}></div>
        <div className={classes.Content_name}>{name}</div>
        <div className={classes.Content_grade}>{grade}</div>
        { selectedInfo 
          ? <div className={classes.Content_info}>
              {selectedInfo}
            </div>
          : null
        }
        <div className={classes.Content_iconbox}>
          <div className={classes.Content_ID} 
               onClick = {()=> clicked(id,"사원번호")}>
            <TiInfoLarge className = {classes.Icons}/> <span>{id}</span>
          </div>
          <div className={classes.Content_phone} 
               onClick = {()=> clicked(email,"이메일")}>
            <TiMail className = {classes.Icons}/> <span>{email}</span>
          </div>
          <div className={classes.Content_date} 
               onClick = {()=> clicked(joinDate,"입사날짜")}>
            <TiCalendar className = {classes.Icons}/> <span>{joinDate}</span>
          </div>
        </div>
      </div>
      </NavLink>
    </>
  )
}

export default ListInfo;