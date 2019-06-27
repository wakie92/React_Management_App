import React from 'react';
import classes from './ListInfo.module.scss';
import { TiInfoLarge, TiMail, TiCalendar } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';

interface ListInfoProps {
  id: number;
  key: number;
  name: string;
  grade: string;
  joinDate: string;
  email: string;
  clicked: (info: null | number | string, infoType: string) => void | null;
  selectedInfo: boolean;
  selectedInfoJSX: JSX.Element;
}

const ListInfo: React.FC<ListInfoProps> = props => {
  const {
    id,
    key,
    name,
    grade,
    joinDate,
    email,
    clicked,
    selectedInfo,
    selectedInfoJSX,
  } = props;
  return (
    <>
      <div className={classes.Workerlist_bar} key = {key}>
        <div className={classes.Content_photo} />
        <NavLink
          exact
          to={`/workerinfo/detail/${id}`}
          className={classes.Content_name}
          
        >
          {name}
        </NavLink>
        <div className={classes.Content_grade}>{grade}</div>
        {selectedInfo === true ? (
          <div className={classes.Content_info}>{selectedInfoJSX}</div>
        ) : null}
        <div className={classes.Content_iconbox}>
          <div
            className={classes.Content_ID}
            onClick={() => clicked(id, '사원번호')}
          >
            <TiInfoLarge className={classes.Icons} /> <span>{id}</span>
          </div>
          <div
            className={classes.Content_phone}
            onClick={() => clicked(email, '이메일')}
          >
            <TiMail className={classes.Icons} /> <span>{email}</span>
          </div>
          <div
            className={classes.Content_date}
            onClick={() => clicked(joinDate, '입사날짜')}
          >
            <TiCalendar className={classes.Icons} /> <span>{joinDate}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListInfo;
