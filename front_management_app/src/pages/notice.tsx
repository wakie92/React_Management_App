import React from 'react';
import Layout from 'components/UI/Layout';
import NoticeData from 'libs/boardData.json';
import NoticeContainer from 'containers/NoticeContainer';

const notice: React.FC = ({match}:any) => {
  return (
    <Layout pageType = 'Notice'>
      <NoticeContainer NoticeData = {NoticeData} matchData = {match}/>
    </Layout>
  )
}

export default notice;