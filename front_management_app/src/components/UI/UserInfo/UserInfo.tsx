import React from 'react';
import classes from './UserInfo.module.scss';

const UserInfo: React.FC  = () => {
  const imgUrl = 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-938727218762/ManageImg/avatar-inside-a-circle.svg';
  return (
    <div className = {classes.UserInfoWrapper}>
      <img src = {imgUrl}  alt = 'img' className = {classes.Img}/>
      <span className = {classes.UserName}>Changhun Lee</span>
      <span className = {classes.UserGrade}>Manager</span>
    </div>
  )
}
export default UserInfo;