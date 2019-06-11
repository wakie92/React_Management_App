import React, { ReactHTML, useState } from 'react';
import ListInfo from 'components/WorkersList/ListInfo';

interface WorkerInfoProps {
  staff: any;
  key: number;
}

const WorkerInfoContainer: React.FC<WorkerInfoProps> = (
  staff: any,
  key: number,
) => {
  const [selectedInfoJsx, setSelectedInfoJsx] = useState();
  const [selectedInfoType, setSelectedInfoType] = useState('');
  const style: Object = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '550',
  };
  const makeInfoBox: any = (info: string, infoType: string) => {
    let infoBox: JSX.Element = (
      <div style={style}>
        {infoType} : {info}
      </div>
    );
    if (selectedInfoType === '' || selectedInfoType !== infoType) {
      setSelectedInfoJsx(infoBox);
      setSelectedInfoType(infoType);
    } else if (selectedInfoType === infoType) {
      setSelectedInfoJsx(null);
      setSelectedInfoType('');
    }
  };
  const onShowInfoBox = (info: any, infoType: string) => {
    switch (infoType) {
      case '사원번호':
      case '이메일':
      case '입사날짜':
        return makeInfoBox(info, infoType);
      default:
        return null;
    }
  };
  return (
    <ListInfo
      id={staff.id}
      key={staff.id}
      name={staff.name}
      grade={staff.grade}
      joinDate={staff.join_date}
      email={staff.email}
      clicked={onShowInfoBox}
      selectedInfo={selectedInfoJsx}
    />
  );
};

export default WorkerInfoContainer;
