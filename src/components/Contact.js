import React from 'react'
import Menu from './Menu'
import Footer from './Footer'
import HeroImg from './HeroImg'
import { Form } from './Form'

export default function Contact() {
  return (
    <>
    <Menu></Menu>
    <HeroImg heading="CONTACT." text="Let's have connect!"></HeroImg>
    <Form></Form>
    <Footer></Footer>
    </>
  )
}
