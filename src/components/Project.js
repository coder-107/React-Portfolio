import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import HeroImg from './HeroImg';
import PricingCard from './PricingCard';
// import DynamicCard from './DynamicCard';
import AllProject from './AllProject';

export default function Project() {
  return (
    <>
    <Menu></Menu>
    <HeroImg heading="PROJECTS." text="Some of most recent work"></HeroImg>
    <AllProject></AllProject>
    <PricingCard></PricingCard>
    <Footer></Footer>
    </>
  )
}
