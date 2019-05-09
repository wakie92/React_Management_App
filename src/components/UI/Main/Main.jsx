import React from 'react';
import classes from './Main.module.scss';
import MainContents from 'components/UI/Main/MainContents';
const Main = () => {

  return (
    <main>
      <section className = {classes.SectionHeader}>
        header
      </section>
      <section className = {classes.SectionContents}>
        <MainContents/>
      </section>
    </main>
  )
}

export default Main;