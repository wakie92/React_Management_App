import React from 'react';
import classes from './MainWorkerInfoAttendance.module.scss';

interface InfoAttendanceProps {
  totalYV?: JSX.Element;
  usedYV?: JSX.Element;
  leftYV?: JSX.Element;
}
const MainWorkerInfoAttendance: React.FC<InfoAttendanceProps> = ({
  totalYV,
  usedYV,
  leftYV,
}) => {
  return (
    <div className={classes.InputWrapper}>
      <div className={classes.WrapperHeader}>Worker Attendance</div>
      <div className={classes.InputForm}>
        <div className={classes.UsedYv}>
          <span>사용한연차</span>
        </div>
        <div className={classes.UsedYvCnt}>{usedYV}</div>
        <div className={classes.AvailableYV}>사용가능연차</div>
        <div className={classes.AvailableYvCnt}>{leftYV}</div>
        <div className={classes.TotalYv}>총 연차 갯수</div>
        <div className={classes.TotalYvCnt}>{totalYV}</div>
        <div className={classes.UsedHv}>사용한반차횟수</div>
        <div className={classes.UsedHvCnt}>0</div>
        <div className={classes.Late}>지각</div>
        <div className={classes.LateCnt}>0</div>
        <div className={classes.FullTimeWorking}>만근횟수(sample)</div>
        <div className={classes.FullTimeWorkingCnt}>0</div>
        <div className={classes.StartTime}>출근시간</div>
        <div className={classes.StartTimeLog}>09:00</div>
        <div className={classes.FinishTime}>퇴근시간</div>
        <div className={classes.FinishTimeLog}>18:00</div>
      </div>
    </div>
  );
};

export default MainWorkerInfoAttendance;
