import React from 'react';
import classes from './NoticeItemContent.module.scss';
interface NoticeContent {
  id: number;
  title: string;
  contents: string;
  view: number;
  user_id: number;
  created_at: string;
  updated_at: string;
}
const NoticeItemContent: React.FC<NoticeContent> = props => {
  console.log(props);
  return (
    <div className={classes.ContentWrapper}>
      <div className={classes.ContentHeader}>
        <div className={classes.Header}>
          <p>{props.title}</p>
          <p>{props.created_at}</p>
        </div>
        <p className={classes.ViewCount}>{props.view}</p>
      </div>
      <div className={classes.Content}>{props.contents}</div>
    </div>
  );
};

export default NoticeItemContent;
