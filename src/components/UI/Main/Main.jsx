import React from 'react';
import classes from './Main.module.scss';
import MainHeader from './MainHeader';
const Main = ({children}) => {
  return (
    <main>
      <section className = {classes.SectionHeader}>
        <MainHeader/>
      </section>
      <section className = {classes.SectionContents}>
        {children}
      </section>
    </main>
  )
}

export default Main;