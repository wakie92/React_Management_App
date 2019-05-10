import React from 'react';
import classes from './MainContents.module.scss';
import MainContentsHeader from 'components/UI/Main/MainContentsHeader';
import MainContentsSubHeader from 'components/UI/Main/MainContentsSubHeader';
//여기에 import
import MainWorkerDetailInfo from 'components/UI/Main/MainWorkerDetailInfo';
const MainContents = () => {

  return (
    <div className = {classes.MainContents}>
      <MainContentsHeader/>
      {/* 사원목록 헤더 */}
      
      <MainContentsSubHeader/>
      {/* 형 사원 리스트 */}
      <MainWorkerDetailInfo/>
    </div>
  )
}
export default MainContents;
