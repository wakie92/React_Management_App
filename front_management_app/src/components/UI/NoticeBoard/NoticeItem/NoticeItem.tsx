import React from 'react';
import classes from './NoticeItem.module.scss';
import { NavLink } from 'react-router-dom';

interface NoticeItemProps {
  item: any;
  key: number;
}
const NoticeItem: React.FC<NoticeItemProps> = ({ item }) => {
  return (
    <>
      <div className={classes.NoticeItemWrapper}>
        <NavLink to = {`/notice/${item.id}`}>
          <span className={classes.NoticeTitle}>{item.title}</span>
        </NavLink>
        <span className={classes.NoticeDate}>{item.created_at}</span>
      </div>
      <hr className={classes.NoticeItemHr} />
    </>
  );
};

export default NoticeItem;
