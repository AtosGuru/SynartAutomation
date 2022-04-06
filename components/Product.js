import React from 'react';

export function Product() {
  return (
    <section class='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div class='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div class='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
          <img class='object-cover object-center rounded' alt='encode' src='./encode.jpg' />
        </div>
        <div class='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
          <h1 class='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            ENCODE321 - Our Flagship Product.
          </h1>
          <p class='mb-8 leading-relaxed'>
            ENCODE321 is an interface control board that can read ywo quadrature encoders in parallel <br /> and also
            drive two motor drivers with PWM and direction signals to obtain colosed-loop <br /> dual motor control
            system with 12.C interface.
          </p>
        </div>
      </div>
    </section>
  );
}
