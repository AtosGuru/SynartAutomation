export const Cta = () => {
  return (
    <div className='bg-gray-900'>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
          <div className='flex flex-col mb-16 sm:text-center sm:mb-0'>
            <a href='/' className='mb-6 sm:mx-auto'>
              <div className='flex items-center justify-center w-12 h-12 rounded-full bg-red-500'>
                <svg className='w-10 h-10 text-deep-purple-900' stroke='#fff' viewBox='0 0 52 52'>
                  <polygon
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                    points='29 13 14 29 25 29 23 39 38 23 27 23'
                  />
                </svg>
              </div>
            </a>
            <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
              <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto'>
                <span className='relative inline-block'>
                  <svg
                    viewBox='0 0 52 24'
                    fill='#4F46E5'
                    className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                  >
                    <defs>
                      <pattern id='700c93bf-0068-4e32-aafe-ef5b6a647708' x='0' y='0' width='.135' height='.30'>
                        <circle cx='1' cy='1' r='.7' />
                      </pattern>
                    </defs>
                    <rect fill='url(#700c93bf-0068-4e32-aafe-ef5b6a647708)' width='52' height='24' />
                  </svg>
                  <span className='relative'>Want</span>
                </span>{' '}
                to Automate something?
              </h2>
              <p className='text-base text-indigo-100 md:text-lg'>
                A problem shared is a problem halved. we like it whe you succeed. we make that possible with our
                specialists in the sphere of management, automation and operations.
              </p>
            </div>
            <div>
              <a
                href='https:///'
                target='_next'
                className=' inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md hover:text-white bg-red-500 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none '
              >
                Let us help!!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
