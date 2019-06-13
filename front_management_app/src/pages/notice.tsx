import React from 'react';
import Layout from 'components/UI/Layout';
import Notice from 'components/Notice';

const notice: React.FC = ({match}:any) => {
  console.log(match);
  return (
    <Layout pageType = 'Notice'>
      <Notice/>
    </Layout>
  )
}

export default notice;