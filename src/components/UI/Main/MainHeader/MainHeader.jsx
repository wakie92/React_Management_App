import React from 'react';
import classes from './MainHeader.module.scss';


const MainHeader = () => {

  return (
    <div className = {classes.HeaderWrapper}>
      <div className = {classes.Search}>
        <input type = "text" placeholder = "검색...."/>
      </div>
      <div className = {classes.Navbar}>
        <nav>
          <span>공지사항</span>
        </nav>
        <button>출근</button>
        <button>퇴근</button>
      </div>
    </div>
  )
}
export default MainHeader;
