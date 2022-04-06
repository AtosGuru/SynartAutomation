import React, { useState } from 'react';
import link from 'next/link';
import { useRouter } from 'next/router';
export const Nav = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const home = ' px-4  py-5 mx-auto  navbar sm:max-w-xl md:max-w-full  md:px-24 lg:px-5';
  const nonHome = 'px-4  py-5 mx-auto bg-gray-500  navbar sm:max-w-xl md:max-w-full  md:px-24 lg:px-5';

  return (
    <div className={router.pathname === '/' ? home : nonHome} style={{ zIndex: 50 }}>
      <div className=' flex items-center justify-between  mx-auto lg:mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-1   '>
        <img src='/logo.png' alt='logo' width='150px' />
        <ul className='flex items-center hidden space-x-8 lg:flex'>
          <li>
            <a
              href='/'
              aria-label='Our product'
              title='Our product'
              className='font-medium tracking-wide text-white transition-colors duration-200 hover:text-red-500'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='/about'
              aria-label='Synart blog'
              title='Synart blog'
              className='font-medium tracking-wide  text-white transition-colors duration-200 hover:text-red-500'
            >
              About us
            </a>
          </li>
          <li>
            <a
              href='/services'
              class='font-medium tracking-wide text-white transition-colors duration-200 hover:text-red-500'
            >
              Services
            </a>
          </li>
          <li>
            <a
              href='https://docs.Synart.io'
              aria-label='Synart Docs'
              title='Synart docs'
              class='font-medium tracking-wide  text-white transition-colors duration-200 hover:text-red-500'
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href='#contact'
              aria-label='Synart GitHub'
              title='Synart GitHub'
              class='font-medium tracking-wide  text-white transition-colors duration-200 hover:text-red-500'
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className='lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
              <path fill='#fff' d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z' />
              <path fill='#fff' d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z' />
              <path fill='#fff' d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z' />
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full bg-white'>
              <div className='p-5  border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4 '>
                  <div>
                    <a href='/' aria-label='Company' title='Company' className='inline-flex items-center'>
                      {/* <svg
                        className='w-8 text-deep-purple-accent-400'
                        viewBox='0 0 24 24'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeMiterlimit='10'
                        stroke='currentColor'
                        fill='none'
                      >
                        <rect x='3' y='1' width='7' height='12' />
                        <rect x='3' y='17' width='7' height='6' />
                        <rect x='14' y='1' width='7' height='6' />
                        <rect x='14' y='11' width='7' height='12' />
                      </svg> */}
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>Synart</span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <a
                        href='https://docs.Synart.io/dev-overview'
                        aria-label='Our product'
                        title='Our product'
                        className='font-medium tracking-wide  text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://docs.Synart.io/'
                        aria-label='Synart Docs'
                        title='Synart Docs'
                        class='font-medium tracking-wide  text-gray-800 transition-colors duration-200 hover:text-red-500'
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://blog.Synart.io/'
                        aria-label='Product pricing'
                        title='Product pricing'
                        className='font-medium tracking-wide  text-gray-800 transition-colors duration-200 hover:text-red-500'
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
