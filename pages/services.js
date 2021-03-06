import React from 'react';
import { Nav } from '@components/NavBar';
import ReactDOM from 'react-dom';
import $ from 'jquery'

class Services extends React.Component {
  componentDidMount() {
  
    $(".advantage").hover(function() {
      console.log( $(this > ".leading-relaxed"));
      $(this).children(".leading-relaxed").removeClass('a-display-none');
    }, function() {
      $(this).children(".leading-relaxed").addClass('a-display-none');
    })
  }
  render() {
    return (
      <>
        <Nav />
      
        <section className='text-gray-600 body-font bg-gray-100 ' id='services'>
        {
          
         
        }
          <div className='container px-5 py-24 mx-auto px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='flex flex-wrap w-full mb-20 flex-col items-center text-center'>
              <br></br>
              <br></br>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 animate__heartBeat'>Advantages of Robotics</h1>
            </div>
            <div className='flex flex-wrap -m-4 animate__slideInLeft  animate__delay-2s'>
            
              <div className='xl:w-1/3 md:w-1/2 p-4 '>
                <div className='advantage border border-gray-200 p-6 rounded-lg bg-white '>
                  <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-6 h-6'
                      viewBox='0 0 24 24'
                    >
                      <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                    </svg>
                  </div>
                  <h2 className='text-lg text-gray-900 font-medium title-font mb-2'>Automations</h2>
                  <p className='a-display-none leading-relaxed text-base'>
                  Get twice the efficiency in your business with our latest technology solutions.
                  </p>
                </div>
              </div>
              
                <div className='xl:w-1/3 md:w-1/2 p-4'>
                  <div className='advantage border border-gray-200 p-6 rounded-lg bg-white'>
                    <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-6 h-6'
                        viewBox='0 0 24 24'
                      >
                        <circle cx='6' cy='6' r='3'></circle>
                        <circle cx='6' cy='18' r='3'></circle>
                        <path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
                      </svg>
                    </div>
                    <h2 className='text-lg text-gray-900 font-medium title-font mb-2'>Robotics</h2>
                    <p className='a-display-none leading-relaxed text-base'>
                    Let us design and develop a robot that fulfills your needs.
                    </p>
                  </div>
                </div>
                <div className='xl:w-1/3 md:w-1/2 p-4'>
                  <div className='advantage border border-gray-200 p-6 rounded-lg bg-white'>
                    <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-6 h-6'
                        viewBox='0 0 24 24'
                      >
                        <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                        <circle cx='12' cy='7' r='4'></circle>
                      </svg>
                    </div>
                    <h2 className='text-lg text-gray-900 font-medium title-font mb-2'>Artificial Intelligence</h2>
                    <p className='a-display-none leading-relaxed text-base'>
                    Make your machines smarter with artificial intelligence, smarter machines
give better profits.
                    </p>
                  </div>
                </div>
                <div className='xl:w-1/3 md:w-1/2 p-4'>
                  <div className='advantage border border-gray-200 p-6 rounded-lg bg-white'>
                    <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-6 h-6'
                        viewBox='0 0 24 24'
                      >
                        <path d='M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7'></path>
                      </svg>
                    </div>
                    <h2 className='text-lg text-gray-900 font-medium title-font mb-2'>IOT</h2>
                    <p className='a-display-none leading-relaxed text-base'>
                    Make your machines smarter with artificial intelligence, smarter machines
give better profits.
                    </p>
                  </div>
                </div>
                <div className='xl:w-1/3 md:w-1/2 p-4'>
                  <div className='advantage border border-gray-200 p-6 rounded-lg bg-white'>
                    <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-6 h-6'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'></path>
                      </svg>
                    </div>
                    <h2 className='text-lg text-gray-900 font-medium title-font mb-2'>Prototyping Solutions</h2>
                    <p className='a-display-none leading-relaxed text-base'>
                    Do you have an idea to solve a problem? And not sure about your solution?
Let us develop your solution and test it against the problem.
                    </p>
                  </div>
                </div>
                <div className='xl:w-1/3 md:w-1/2 p-4'>
                  <div className='advantage border border-gray-200 p-6 rounded-lg bg-white'>
                    <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-6 h-6'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
                      </svg>
                    </div>
                    <h2 className='text-lg text-gray-900 font-medium title-font mb-2'>Product Development</h2>
                    <p className='a-display-none leading-relaxed text-base'>
                    Are you struggling with converting your prototype into a fully functioning
product? We???re here to help.
                    </p>
                  </div>
                </div>
              
              
            </div>
          </div>
      </section>
      </>
    );
  }
  
}

export default Services;
