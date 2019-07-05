import React from 'react';
import HomeContainer from 'containers/LogInContainer';

const home: React.FC = ({ history }: any) => {
  return (
    <>
      <HomeContainer history={history} />
    </>
  );
};
export default home;
