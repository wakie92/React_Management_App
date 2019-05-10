import React from 'react';
import classes from './MainWorkerInfoAttendance.module.scss';

const MainWorkerInfoAttendance = () => {
  let attacedClassNames = [classes.YearVacation,classes.YearVacationCnt]
  return (
    <div className = {classes.InputWrapper}> 
      <div className = {classes.WrapperHeader}>Worker Attendance</div>
      <div className = {classes.InputForm}>
        <div className = {classes.YearVacation }>사용한연차</div>
        <div className = {attacedClassNames.join(' ')}>0</div>
        <div className = {classes.YearVacation}>사용가능연차</div>
        <div className = {attacedClassNames.join(' ')}>15</div>
        <div className = {classes.YearVacation} >총 연차 갯수</div>
        <div className = {attacedClassNames.join(' ')}>15</div>
        <div >사용한반차횟수</div>
        <div>0</div>
        <div>지각</div>
        <div>0</div>
        <div>만근횟수(sample)</div>
        <div>0</div>
        <div>출근시간</div>
        <div>09:00</div>
        <div>퇴근시간</div>
        <div>18:00</div>
      </div>
    </div>
  )
}

export default MainWorkerInfoAttendance;