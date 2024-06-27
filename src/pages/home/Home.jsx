import React from 'react';
import Banner from './Banner';
import HomeCartegory from './HomeCartegory';
import CatergoryShowCase from './CatergoryShowCase';
import Register from './Register';
import Clients from './Clients'
import AboutUs from './AboutUs';
import AppSection from './AppSection';

const Home = () => {
  return (
    <>
    <Banner/>
    <HomeCartegory/>
    <CatergoryShowCase/>
    <Register/>
    <Clients/>
    <AboutUs/>
<AppSection/>
    </>
  )
}

export default Home