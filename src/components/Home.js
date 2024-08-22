import React from 'react'
import Menu from './Menu'
import Homecontent from './Homecontent'
import Footer from './Footer'
import AllProject from './AllProject'
import PricingCard from './PricingCard'

export default function Home() {
  return (
    <>
    <Menu></Menu>
    <Homecontent></Homecontent>
    <AllProject></AllProject>
    <PricingCard></PricingCard>
    <Footer></Footer>
    </>
  )
}
