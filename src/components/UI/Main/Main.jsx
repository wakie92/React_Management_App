import React from 'react';
import classes from './Main.module.scss';

const Main = ({children}) => {
  return (
    <main>
      <section className = {classes.SectionHeader}>
        header
      </section>
      <section className = {classes.SectionContents}>
        {children}
      </section>
    </main>
  )
}

export default Main;