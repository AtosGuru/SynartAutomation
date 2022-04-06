import { Nav } from '@components/NavBar';

function About() {
  return (
    <>
      <Nav />
      <section class='text-gray-600 body-font'>
        <div class='container px-5 py-24 mx-auto flex flex-col'>
          <div class='lg:w-4/6 mx-auto'>
            <div class='rounded-lg h-64 overflow-hidden'>
              <img alt='content' class='object-cover object-center ' src='./logo-black.png' />
            </div>
            <div class='flex flex-col sm:flex-row mt-10'>
              <p class='leading-relaxed text-lg mb-4'>
                Synart Automation was started as a solution to a problem that many businesses face, that is -
                inefficiency. It is our mission to provide solutions that can help businesses and individuals accomplish
                their goals with minimal effort required on their part. As an ambitious team of automation and robotic
                engineers, we are committed to working towards success together with our customers by helping them
                automate processes that are repetitive, costly or inefficient. An idea becoming reality is what we at
                synart automation are based on. We develop robots that perform variety of activities on behalf of you.
                We work on every problem of yours and design a suitable solution. The solution can be based on AI/
                pattern recognition, image processing, mechatronics and any other technology of your choice. We’re a
                company that believes you shouldn’t have to work more than that is needed. This vision is what motivates
                us to help you automate your processes so that you can spend the time focusing on what matters the most.
                Robots and automation systems that we’ve created have been used for factory automation, food processing
                industries, eliminating mundane and repetitive tasks, service sectors, education, and many more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
