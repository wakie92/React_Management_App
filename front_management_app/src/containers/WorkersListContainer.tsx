import React, { useState, useEffect } from 'react';
import WorkerList from 'components/WorkersList';

interface WorkersListProps {
  staffList: any;
}
const WorkersListContainer: React.FC<WorkersListProps> = ({ staffList }) => {
  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    console.log(staffList)
    setStaffs(staffList);
  }, [staffList]);

  console.log(staffs)
  return <WorkerList staffList={staffs} />;
};
export default WorkersListContainer;
