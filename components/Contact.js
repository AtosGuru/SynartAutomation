import React from 'react';

export function Contact() {
  return (
    <div className='bg-gray-100'>
      <section
        class=' px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gray-100'
        id='contact'
      >
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 '>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            <span className='relative inline-block'>
              <svg
                viewBox='0 0 52 24'
                fill='#6B7280'
                className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
              >
                <defs>
                  <pattern id='34f481be-159a-4846-821d-9ca19fb6bcc5' x='0' y='0' width='.135' height='.30'>
                    <circle cx='1' cy='1' r='.7' />
                  </pattern>
                </defs>
                {/* <rect fill='url(#34f481be-159a-4846-821d-9ca19fb6bcc5)' width='52' height='24' /> */}
              </svg>
              <span className='relative text-gray-900'>Contact</span>
            </span>{' '}
            Us
          </h2>
        </div>
        <div class='container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap'>
          <div class='lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
            <img
              width='100%'
              height='100%'
              class='absolute inset-0'
              frameBorder='0'
              title='map'
              marginHeight='0'
              marginWidth='0'
              scrolling='no'
              src='/map.JPG'
            ></img>
            <div class='bg-white relative flex flex-wrap py-6 rounded shadow-md'>
              <div class='lg:w-1/2 px-6'>
                <h2 class='title-font font-semibold text-gray-900 tracking-widest text-xs'>ADDRESS</h2>
                <p class='mt-1'>
                  Synart Automation Pvt Ltd 99, KHB Colony, 6th Cross, Vishweshwar Nagar, Hubli, Karnataka 580032.
                </p>
              </div>
              <div class='lg:w-1/2 px-6 mt-4 lg:mt-0'>
                <h2 class='title-font font-semibold text-gray-900 tracking-widest text-xs'>EMAIL</h2>
                <a class='text-red-500 leading-relaxed'>darshan@synart.in</a>
                <h2 class='title-font font-semibold text-gray-900 tracking-widest text-xs mt-4'>PHONE</h2>
                <p class='leading-relaxed'>+91-9353379524</p>
              </div>
            </div>
          </div>
          <div class='lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 p-8 md:mt-0 bg-white'>
            <h2 class='text-gray-900 text-lg mb-1 font-medium title-font'>Questions? Got an Project Idea?</h2>
            <p class='leading-relaxed mb-5 text-gray-600'>reachout to us, we will get back to you ASAP!!</p>
            <div class='relative mb-4'>
              <label htmlFor='name' class='leading-7 text-sm text-gray-600'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                class='w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                spellCheck='false'
                data-ms-editor='true'
              />
            </div>
            <div class='relative mb-4'>
              <label htmlFor='email' class='leading-7 text-sm text-gray-600'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                class='w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <div class='relative mb-4'>
              <label htmlFor='message' class='leading-7 text-sm text-gray-600'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                class='w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                spellCheck='false'
                data-ms-editor='true'
              ></textarea>
            </div>
            <button class='text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg'>
              Contact
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
