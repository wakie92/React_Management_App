import React from 'react';
import classes from './MainContentsSubHeader.module.scss';
import { NavLink } from 'react-router-dom';

interface SubHeaderProps {
  id : any
}
const MainContentsSubHeader: React.FC<SubHeaderProps> = ({id}) => {
  return (
    <div className={classes.SubHeaderWrapper}>
      <div className={classes.CurPage}>
        <NavLink exact to={`/workerinfo/detail/${id}`}>
          <span>신상정보</span>
        </NavLink>
        <NavLink exact to={`/workerinfo/attendance/${id}`}>
          <span>근태정보</span>
        </NavLink>
      </div>
      <div className={classes.Line} />
    </div>
  );
};
export default MainContentsSubHeader;
