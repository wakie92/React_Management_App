import React from 'react';
import classes from './Layout.module.scss';
import Aside from 'components/UI/Aside'
import Main from 'components/UI/Main';

const Layout = ({children,pageType}) => {
  return (
    <div className = {[classes.LayoutBack, classes[pageType]].join(' ')}>
      <div className = {classes.Layout}>
          <Aside/>
          <Main>
            {children}
          </Main>
      </div>
    </div>
  )
}

export default Layout;