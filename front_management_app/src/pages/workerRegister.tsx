import React from 'react';
import Layout from 'components/UI/Layout';
import RegisterContainer from 'containers/RegisterContainer';

const workerRegister: React.FC = ({history} :any) => {
  return (
    <Layout pageType = 'Register'>
      <RegisterContainer history = {history}/>
    </Layout>
  )
}

export default workerRegister;