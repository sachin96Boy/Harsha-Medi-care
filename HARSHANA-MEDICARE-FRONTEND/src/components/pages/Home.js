import React from 'react';

import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

import '../../App.css';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
