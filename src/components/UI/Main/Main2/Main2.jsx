import React from 'react';
import classes from './Main2.module.scss';
import MainContents from 'components/UI/Main/MainContents';
const Main2 = ({children}) => {

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

export default Main2;