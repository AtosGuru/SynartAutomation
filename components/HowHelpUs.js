import { Fade, LightSpeed} from 'react-reveal';
import Jello from 'react-reveal/Jello';

export const HowHelpUs = () => {
    return (
      <div className='bg-gray-900'>
        <div className='container px-5 py-24 mx-auto px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
         
          <div className='flex flex-wrap -m-4 '>
            <div className='container px-5 py-24 mx-auto px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20' style={{height: '400px'}}>
                <Fade up>
                  <h2 className='a-how-title max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto' >
                    <span className='relative inline-block'>
                      <svg
                        viewBox='0 0 52 24'
                        fill='#4F46E5'
                        className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                      >
                        <defs>
                          {/* <pattern id='700c93bf-0068-4e32-aafe-ef5b6a647708' x='0' y='0' width='.135' height='.30'>
                            <circle cx='1' cy='1' r='.7' />
                          </pattern> */}
                        </defs>
                        {/* <rect fill='url(#700c93bf-0068-4e32-aafe-ef5b6a647708)' width='52' height='24' /> */}
                      </svg>
                     
                    </span>{' '}
                    How Can Automation and Robotics help you?
                  </h2>
                </Fade>
                <LightSpeed left>
                  <p className='text-base text-indigo-100 md:text-lg a-p'>
                  Robots and Automation offer a more reliable alternative to human employees because they provide consistency in performance, quality, and efficiency, allowing us to promotelabortohigher-value tasks.  They can also perform tasks that are too dangerous for humans to do, such as working with hazardous materials, or tasks that are physically exhausting for humans.
                  </p>
                </LightSpeed>
                </div>
                <Jello>
                    <div class="row grid grid-flow-col grid-rows-1 grid-cols-5 gap-5 img-div" style={{margin: 'auto'}}>
                      <div className="col-md-2">
                        <img src="/img/Reliable.svg" alt="" />
                        <h3 className="how-help">Reliable</h3>
                      </div>
                      <div className="col-md-2">
                        <img src="/img/Increase efficiency.svg" alt="" />
                        <h3 className="how-help">Increase efficiency</h3>
                      </div>
                      <div className="col-md-2">
                        <img src="/img/Precise.svg" alt="" />
                        <h3 className="how-help">Precise</h3>
                      </div>
                      <div className="col-md-2">
                        <img src="/img/Save Time.svg" alt="" />
                        <h3 className="how-help">Save Time</h3>
                      </div>
                      <div className="col-md-2">
                        <img src="/img/Save Money.svg" alt="" />
                        <h3 className="how-help">Save Money</h3>
                      </div>
                      
                    </div>
                </Jello>
                
              
          </div>
        </div>
      </div>
    );
  };
  