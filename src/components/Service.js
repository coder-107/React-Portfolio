import React from 'react'
import PricingCard from './PricingCard'
import Menu from './Menu'
import Footer from './Footer'
import HeroImg from './HeroImg'

export default function Service() {
  return (
    <>
    <Menu></Menu>
    <HeroImg heading="SERVICES." text="My Expertice in..."></HeroImg>
    <PricingCard></PricingCard>
    <Footer></Footer>
    </>
  )
}
