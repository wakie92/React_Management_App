import React from 'react';
import classes from './Aside.module.scss';
import UserInfo from 'components/UI/UserInfo';

const Aside: React.FC = () => {

  const styles:Object = {
    "flex": "1",
    "backgroundColor" : "#2A58AD"
  }
  return (
    <aside style= {styles}>
      <UserInfo/>
    </aside>
  )
}
export default Aside;


