import React from 'react';
import NoticeBoard from 'components/UI/NoticeBoard';
import NoticeItem from '../UI/NoticeBoard/NoticeItem';
import NoticeItemContent from '../UI/NoticeBoard/NoticeItemContent';

interface NoticeBoardProps {
  NoticeData: any;
  matchData: any;
}
const Board: React.FC<NoticeBoardProps> = ({ NoticeData, matchData }) => {
  let noticeItems: JSX.Element;
  let noticeIdx: number = matchData.params.id;
  console.log(matchData);
  if (!noticeIdx) {
    noticeItems = NoticeData.map((item: any) => {
      return <NoticeItem item={item} key={item.id} />;
    });
  } else {
    const {
      id,
      title,
      contents,
      view,
      user_id,
      created_at,
      updated_at,
    } = NoticeData[noticeIdx];
    noticeItems = (
      <NoticeItemContent
        id={id}
        title={title}
        contents={contents}
        view={view}
        user_id={user_id}
        created_at={created_at}
        updated_at={updated_at}
      />
    );
  }
  return <NoticeBoard noticeIdx={noticeIdx}>{noticeItems}</NoticeBoard>;
};
export default Board;
