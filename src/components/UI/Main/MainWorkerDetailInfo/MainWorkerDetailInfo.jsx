import React from 'react' ;
import classes from './MainWorkerDetailInfo.module.scss';

const MainWorkerDetailInfo = () => {

  return (
    <div className = {classes.InputWrapper}> 
      <div className = {classes.WrapperHeader}>Job description1111</div>
      <div className = {classes.InputForm}>
        <div>사원번호</div>
        <div>123456</div>
        <div className = {classes.ProfileImg}>프로필사진</div>
        <div className = {classes.Img}></div>
        <div>이름</div>
        <div>서현덕</div>
        <div>생년월일</div>
        <div>1993.00.00</div>
        <div>이메일</div>
        <div>seohyundeock@github.com</div>
        <div>직책</div>
        <div>CTO</div>
        <div>입사일</div>
        <div>2019/05/09</div>
        <div>주소</div>
        <div>파주시 경의중앙선 끝쪽</div>
        <div>퇴사일</div>
        <div></div>
        <div>연봉</div>
        <div>5000만원</div>
        <div>근속년수</div>
        <div>0</div>
      </div>
    </div>
  )
}
export default MainWorkerDetailInfo;