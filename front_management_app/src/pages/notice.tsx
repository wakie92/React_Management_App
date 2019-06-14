import React from 'react';
import Layout from 'components/UI/Layout';
import Notice from 'components/Notice';
import NoticeData from 'libs/boardData.json';

const notice: React.FC = ({match}:any) => {
  return (
    <Layout pageType = 'Notice'>
      <Notice NoticeData = {NoticeData} matchData = {match}/>
    </Layout>
  )
}

export default notice;