import React from 'react';
import classes from './MainHeader.module.scss';
import { NavLink } from 'react-router-dom';
import Button from 'components/UI/Button'

interface MainHeaderProps {
  working:() => void;
  leaving:() => void;
}
const MainHeader: React.FC<MainHeaderProps> = props => {
  return (
    <div className = {classes.HeaderWrapper}>
      <div className = {classes.Search}>
        <input type = "text" placeholder = "Search...."/>
      </div>
      <div className = {classes.Navbar}>
        <nav>
        <span><NavLink exact to = '/notice'>notice</NavLink></span>
        </nav>
        <Button btnType = 'working' clicked = {props.working} btnValue = "working"/>
        <Button btnType = 'leaving' clicked = {props.leaving} btnValue = "leaving"/>
      </div>
    </div>
  )
}
export default MainHeader;
