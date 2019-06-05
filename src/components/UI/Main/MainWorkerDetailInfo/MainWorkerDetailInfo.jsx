import React from 'react' ;
import classes from './MainWorkerDetailInfo.module.scss';

const MainWorkerDetailInfo = ({staffInfo}) => {
  console.log(staffInfo);
  if(staffInfo !== []) {
    return (
      <div className = {classes.InputWrapper}> 
        <div className = {classes.WrapperHeader}>Job description</div>
        <div className = {classes.InputForm}>
          <div>사원번호</div>
          <div>{staffInfo[0].id}</div>
          <div className = {classes.ProfileImg}>프로필사진</div>
          <div className = {classes.Img}></div>
          <div>이름</div>
          <div>{staffInfo[0].name}</div>
          <div>생년월일</div>
          <div>{staffInfo[0].birth}</div>
          <div>이메일</div>
          <div>{staffInfo[0].id}</div>
          <div>직책</div>
          <div>{staffInfo[0].id}</div>
          <div>입사일</div>
          <div>{staffInfo[0].id}</div>
          <div>주소</div>
          <div>{staffInfo[0].id}</div>
          <div>퇴사일</div>
          <div>{staffInfo[0].id}</div>
          <div>연봉</div>
          <div>{staffInfo[0].id}</div>
          <div>근속년수</div>
          <div>{staffInfo[0].id}</div>
        </div>
      </div>
    )
  } return null;
}
export default MainWorkerDetailInfo;