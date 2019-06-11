import React, { useState, useCallback } from 'react';
import MainHeader from 'components/UI/Main/MainHeader';

const MainHeaderContainer: React.FC<{}> = () => {
  const [working, setWorking] = useState(false);
  const onWorking = useCallback(() => {
    setWorking(true);
  }, []);
  const onLeaving = useCallback(() => {
    setWorking(false);
  }, []);

  return <MainHeader working={onWorking} leaving={onLeaving} />;
};
export default MainHeaderContainer;
