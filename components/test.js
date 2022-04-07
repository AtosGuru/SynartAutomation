import React from 'react';
import { Nav } from './NavBar';

export const Test = () => {
  return (
    
      <section class='showcase'>
        <video autoPlay muted loop>
          <source src='hero.mp4' type='video/mp4' />
        </video>
        <div class='overlay'></div>
        <div class='text text-center'>
          <div className=' mb-6'>
            {/* <h2 className=' mb-6 font-sans font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              <span style={{fontSize: "50px"}}>
                <span className=' text-4xl xl:inline'>Let Robots Do your </span>
                <span className=' text-4xl text-red-500  xl:inline'>Jobs </span>
              </span>
            </h2> */}
            <h1 className="a-title font-sans font-bold text-gray-900 tracking-tight">Let Robots Do Your <span className="a-job text-red-500 ">Jobs</span></h1>
            
            <p className='text-base text-gray-700 md:text-lg text-center a-p '>
              We offer intelligent automation solutions that are designed to take over repetitive, menial tasks and
              increase efficiency.
            </p>
            <a
              href='#'
              className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-red-500 hover:text-gray-900 focus:shadow-outline focus:outline-none'
              style={{ background: '#ff3333', color: 'white', marginTop: "40px" }}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>
   
  );
};