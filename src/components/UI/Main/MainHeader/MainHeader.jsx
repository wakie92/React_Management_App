import React from 'react';
import classes from './MainHeader.module.scss';
import { NavLink } from 'react-router-dom';
import Button from 'components/UI/Button'
const MainHeader = ({working, leaving}) => {

  return (
    <div className = {classes.HeaderWrapper}>
      <div className = {classes.Search}>
        <input type = "text" placeholder = "검색...."/>
      </div>
      <div className = {classes.Navbar}>
        <nav>
        <span><NavLink exact to = '/notice'>공지사항</NavLink></span>
        </nav>
        <Button btnType = 'working' clicked = {working} btnValue = "출근"/>
        <Button btnType = 'leaving' clicked = {leaving} btnValue = "퇴근"/>
      </div>
    </div>
  )
}
export default MainHeader;
