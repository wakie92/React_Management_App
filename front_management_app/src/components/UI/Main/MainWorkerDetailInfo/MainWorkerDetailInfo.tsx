import React, { useRef, useEffect, useState } from 'react';
import classes from './MainWorkerDetailInfo.module.scss';
interface DetailInfoProps {
  staffId?: JSX.Element;
  staffName?: JSX.Element;
  staffBirth?: JSX.Element;
  staffEmail?: JSX.Element;
  staffGrade?: JSX.Element;
  staffJoinDate?: JSX.Element;
  staffAddress?: JSX.Element;
  staffLeavDate?: JSX.Element;
  staffSalary?: JSX.Element;
  staffWorkingYear?: JSX.Element;
}

const MainWorkerDetailInfo: React.FC<DetailInfoProps> = ({
  staffName,
  staffId,
  staffBirth,
  staffEmail,
  staffGrade,
  staffJoinDate,
  staffAddress,
  staffLeavDate,
  staffSalary,
  staffWorkingYear,
}) => {
  return (
    <div className={classes.InputWrapper}>
      <div className={classes.WrapperHeader}>Job description</div>
      <div className={classes.InputForm}>
        <div>사원번호</div>
        <div>{staffId}</div>
        <div className={classes.ProfileImg}>프로필사진</div>
        <div className={classes.Img} />
        <div>이름</div>
        <div>{staffName}</div>
        <div>생년월일</div>
        <div>{staffBirth}</div>
        <div>이메일</div>
        <div>{staffEmail}</div>
        <div>직책</div>
        <div>{staffGrade}</div>
        <div>입사일</div>
        <div>{staffJoinDate}</div>
        <div>주소</div>
        <div>{staffAddress}</div>
        <div>퇴사일</div>
        <div>{staffLeavDate}</div>
        <div>연봉</div>
        <div>{staffSalary}</div> 
        <div>근속년수</div>
        <div>{staffWorkingYear}</div>
      </div>
    </div>
  );
  // }
  // return null;
};
export default MainWorkerDetailInfo;
