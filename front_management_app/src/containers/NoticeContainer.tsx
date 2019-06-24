import React, { useEffect } from 'react';
import Notice from 'components/Notice';
import { useSelector } from 'react-redux';
import { StoreState } from 'store/modules';

interface NoticeBoardProps {
  matchData: any;
  NoticeData: any;
}

const NoticeContainer: React.FC<NoticeBoardProps> = ({
  matchData,
  NoticeData,
}) => {
  return <Notice NoticeData={NoticeData} matchData={matchData} />;
};
export default NoticeContainer;
