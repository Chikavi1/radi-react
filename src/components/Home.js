import React from 'react'
import Hero from './Home/Hero'
import Footer from './Footer'
import Aliados from './Home/Aliados';
import Banner from './Home/Banner';
import Ayuda from './Home/Ayuda';

const Home = () => (
  <>
    <Hero/>
    <Aliados/>
    <Banner/>
    <Ayuda/>
    
    <Footer/>
  </>
)

export default Home