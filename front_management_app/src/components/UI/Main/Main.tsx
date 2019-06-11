import React from 'react';
import classes from './Main.module.scss';
import MainHeaderContainer from 'containers/MainHeaderContainer';
const Main: React.FC = ({children}) => {
  return (
    <main>
      <section className = {classes.SectionHeader}>
        <MainHeaderContainer/>
      </section>
      <section className = {classes.SectionContents}>
        {children}
      </section>
    </main>
  )
}

export default Main;