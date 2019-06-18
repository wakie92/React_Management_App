import React from 'react';
import Layout from 'components/UI/Layout';
import Register from 'components/Register';

const workerRegister: React.FC = ({match}:any) => {
  return (
    <Layout pageType = 'Register'>
      <Register />
    </Layout>
  )
}

export default workerRegister;