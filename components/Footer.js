import Link from 'next/link';

export const Footer = () => {
  return (
    <div className='bg-gray-900'>
      <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='grid row-gap-10 mb-8 lg:grid-cols-6'>
          <div className='grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4'>
            <div>
              <p className='font-medium tracking-wide text-gray-300'>Address</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <p className='text-gray-400 hover:text-gray-800 cursor-pointer'>
                    Synart Automation Pvt Ltd 99, KHB Colony, 6th Cross, Vishweshwar Nagar, Hubli, Karnataka 580032.
                  </p>
                </li>
              </ul>
            </div>

            <div className>
              <p className='font-medium tracking-wide text-gray-300'>Contact Us</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <Link href='https://contact'>
                    <a className='text-gray-400 hover:text-gray-800 cursor-pointer'>Contact</a>
                  </Link>
                </li>

                <li>
                  <Link href='https://angel.co/'>
                    <a className='text-gray-400 hover:text-gray-800 cursor-pointer' target='_blank'>
                      Career
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className='font-medium tracking-wide text-gray-300'>Community</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <Link href='https://facebook.com'>
                    <a className='text-gray-400 hover:text-gray-800 cursor-pointer' target='_blank'>
                      Facebook
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='https://twitter.com'>
                    <a className='text-gray-400 hover:text-gray-800 cursor-pointer' target='_blank'>
                      Twitter
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='https://blog.synart.in/'>
                    <a className='text-gray-400 hover:text-gray-800 cursor-pointer' target='_blank'>
                      Blog
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='md:max-w-md lg:col-span-2'>
            <span className='text-base font-medium tracking-wide text-gray-300'>Subscribe for updates</span>
            <form className='flex flex-col mt-4 md:flex-row'>
              <input
                placeholder='Email'
                required
                type='text'
                className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
              />
              <button
                type='submit'
                className=' inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500 hover:bg-indigo-900 focus:shadow-outline focus:outline-none'
              >
                Subscribe
              </button>
            </form>
            <p className='mt-4 text-sm text-gray-500'>Receive regular updates on our protocol development updates.</p>
          </div>
        </div>
        <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
          <p className='text-sm text-gray-500'>
            © {new Date().getFullYear()} Synart Automations. Developed by Henry Atos.
          </p>
          <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
            <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-teal-accent-400'></a>
            <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-teal-accent-400'></a>
            <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-teal-accent-400'></a>
          </div>
        </div>
      </div>
    </div>
  );
};
