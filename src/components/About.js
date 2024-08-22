import React from 'react'
import Menu from './Menu'
import Footer from './Footer'
import HeroImg from './HeroImg'
import { AboutContent } from './AboutContent'

export default function About() {
  return (
    <>
    <Menu></Menu>
    <HeroImg heading="ABOUT." text="I'm a Web Developer"></HeroImg>
    <AboutContent></AboutContent>
    <Footer></Footer>
    </>
  )
}
