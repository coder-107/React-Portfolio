import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import HeroImg from './HeroImg';
import MySkill  from './MySkill';

export default function Skill() {
  return (
    <>
    <Menu></Menu>
    <HeroImg heading="SKILL." text="My Expertice in..."></HeroImg>
    <MySkill/>
    <Footer></Footer>
    </>
  )
}
