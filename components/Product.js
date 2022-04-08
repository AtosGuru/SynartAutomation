import React from 'react';

export function Product() {
  return (
    <section className='' style={{padding:'0px', height: "500px",background: '#f3f4f6'}} >
      {/* <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
          <img className='object-cover object-center rounded' alt='encode' src='./encode.jpg' />
        </div>
        <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            ENCODE321 - Our Flagship Product.
          </h1>
          <p className='mb-8 leading-relaxed'>
            ENCODE321 is an interface control board that can read ywo quadrature encoders in parallel <br /> and also
            drive two motor drivers with PWM and direction signals to obtain colosed-loop <br /> dual motor control
            system with 12.C interface.
          </p>
        </div> */}
      {/* </div> */}
      <div className="a-product-section">
        <div className="a-robotic-div">
          <img className='object-cover object-center rounded' alt='encode' src='./img/7.png' />
        </div>
        <div className="a-robotic-des">
          <p className=''>
          Like a robot, we’re automated to do all the hard work for you. It’s easy to get started with us. Just send us an email and we’ll get back to you within 24 hours–no waiting around! If you need something done faster than that, give us a call or come visitour office in Hubballi!
          </p>
          <div className='a-contact-div ' style={{textAlign: "center"}}>
              <a
                href='https://blog.synart.in'
                className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded  md:w-auto md:mr-4 md:mb-0 bg-red-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
              >
                <span className='mr-3' style={{width:'180px', textAlign:'center', marginAuto: 'center'}}>Contact</span>
              </a>
            </div>
        </div>
      </div>
    </section>
  );
}
