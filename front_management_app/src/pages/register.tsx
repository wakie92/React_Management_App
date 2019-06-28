import React from 'react';
import RegisterContainer from 'containers/RegisterContainer';
import Layout from 'components/UI/Layout';

const register : React.FC = () => {
  
  return (
    <Layout pageType = 'Notice'>
      <RegisterContainer />
    </Layout>
  )
}
export default register