import React, { Component, useEffect } from 'react';
import WorkerList from 'components/WorkersList';
import { StoreState } from 'store/modules';
import { useSelector, useDispatch } from 'react-redux';
import { workersActions } from 'store/modules/workers';
import axios from 'axios-base';
interface Iprops {
}
const WorkersListContainer: React.FC<Iprops> = () => {
  const { workersList } = useSelector(({workers} : StoreState) => ({
    workersList : workers.workerList
  }))
  const dispatch = useDispatch();

  useEffect(() => {
    // workersList === undefined  &&
    console.log(workersList);
    dispatch(workersActions.getList())
  },[dispatch])

  return (
    <WorkerList
      staffList={workersList}
    />
  );
}

export default (WorkersListContainer);
