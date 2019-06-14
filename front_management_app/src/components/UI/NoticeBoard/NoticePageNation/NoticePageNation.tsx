import React from 'react';
import classes from './NoticePageNation.module.scss';

interface PageNationProps {
  changingMode: JSX.Element;
}
const NoticePageNation: React.FC<PageNationProps> = ({ changingMode }) => {
  let styleOnPageNation:Object =
    changingMode.props.children.length === 5
      ? { backgroundColor: 'white' }
      : { backgroundColor: '#35AAE7', alignItems:"center" };
  return (
    <>
      <div className={classes.PageNationWrapper}>
        <div className={classes.PageNationBox} style={styleOnPageNation}>
          {changingMode}
        </div>
      </div>
    </>
  );
};
export default NoticePageNation;
