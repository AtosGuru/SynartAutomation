import React from 'react';
import { Nav } from '@components/NavBar';
import { Header } from '@components/Header';
import { Advantages } from '@components/Advantages';
import { Cta } from '@components/Cta';
import { Footer } from '@components/Footer';
import { Product } from '@components/Product';
import { Contact } from '@components/Contact';
import { Hiring } from '@components/Hiring';
import { Test } from '@components/test';
import { Testimonial } from '@components/Testimonial';
import { HowHelpUs } from '@components/HowHelpUs';

import "animate.css"

function IndexPage() {
  return (
    <div id='top'>
      <Nav />
      <Test />
      <Advantages />

      <HowHelpUs />
      
      <Testimonial />
      <Hiring />
      {/* <Product /> */}

      <Contact />
      
      <Footer />
    </div>
  );
}

export default IndexPage;
