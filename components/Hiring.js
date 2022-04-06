import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

export const Hiring = () => {
  return (
    <div className='bg-gray  px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 '>
      <div className='flex flex-col items-center justify-between lg:flex-row'>
        
        <div className='relative lg:w-1/2'>
          <img
            className='object-cover w-full h-56 rounded shadow-lg sm:h-96'
            src='https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
            alt=''
          />
          <a
            href='/'
            aria-label='Play Video'
            className='absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25'
          >
            <div className='flex items-center justify-center'>
              <Zoom>
                <p style={{width: '100%', color: "white", fontSize: "20px", padding: "15px"}}>
              Like a robot, we’re automated to do all the hard work for you. It’s easy to get started with us. Just send us an email and we’ll get back to you within 24 hours–no waiting around! If you need something done faster than that, give us a call or come visitour office in Hubballi!
              </p>
              </Zoom>
            
            </div>
          </a>
        </div>
        <div className='mb-10 lg:max-w-lg lg:pr-5 lg:mb-0'>
          <Slide right>
            <div className='max-w-xl mb-6'>
              <h2 style={{lineHeight: '40px'}} className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                How Easy It Is  To Get Started (With Us)
              </h2>
              {/* <p className='text-base text-gray-700 md:text-lg'>
                Join Synart Team for an awesome opportunity to gain experience working on live projects with real clients
                providing solutions to their problems.
              </p> */}
            </div>
            <div className='flex flex-col items-center md:flex-row'>
              <a
                href='https://blog.synart.in'
                className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded  md:w-auto md:mr-4 md:mb-0 bg-red-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
              >
                <span className='mr-3'>Get Started</span>
              </a>
            </div>
          </Slide>
          
        </div>
      </div>
    </div>
  );
};
