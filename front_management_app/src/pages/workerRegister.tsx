import React from 'react';
import Layout from 'components/UI/Layout';
import RegisterContainer from 'containers/RegisterContainer';

const workerRegister: React.FC = ({match}:any) => {
  return (
    <Layout pageType = 'Register'>
      <RegisterContainer />
    </Layout>
  )
}

export default workerRegister;