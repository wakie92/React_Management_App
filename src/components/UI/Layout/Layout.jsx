import React from 'react';
import classes from './Layout.module.scss';
import Aside from 'components/UI/Aside'
import Main2 from 'components/UI/Main/Main2';
import MainContentsHeader from 'components/UI/Main/MainContentsHeader';

const Layout = ({children}) => {
  return (
    <div className = {classes.LayoutBack}>
      <div className = {classes.Layout}>
          <Aside/>
          <Main2>
            <MainContentsHeader/>
            {children}
          </Main2>
      </div>
    </div>
  )
}

export default Layout;