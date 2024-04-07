import React from 'react'
import  heroimage from '../Images/heroimage.jpg'

const Hero = () => {
  return (
    <>
        <div className='bg-grey-one h-fit w-full  border-b border-pink-two'>
            <div className='grid md:grid-cols-2 '>
              <div className='text-center md:text-left lg:text-left lg:items-start lg:ml-24 md:ml-20 items-center mx-3 order-2 md:order-1 '>
                  <h1 className='mt-12 text-xl lg:text-lg md:text-sm text-one lg:mt-20 '>PERSONALIZED TREATMENTS MADE JUST FOR YOU</h1>
                  <h6 className='text-grey-two font-urbanist text-5xl md:text-4xl lg:text-7xl lg:py-4 font-normal tracking-normal lg:leading-small mt-4 lg:mt-8'>Elevate Your Beauty, <i className='underline decoration-pink-one md:decoration-8'>Naturally</i></h6>
                <p className='text-grey-two font-assistant font-light md:text-base lg:text-base text-lg mt-6 lg:mt-10 md:leading-9 tracking-wide lg:leading-9 '>Write an introduction of your business here. Everyone needs a friend. Friends are the most valuable things in the world. When things happen - enjoy them. They are little gifts. This is probably the greatest thing to happen in my life - to be able to share this with you. </p>
                <button className='btn-one mt-5 md:h-10 md:w-40 md:text-xs text-sm h-14 w-44 p-3 mb-3'>EXPLORE OUR SERVICES</button>
              </div>

              {/*hero img */}
              <div  className='md:ml-32 order-1 md:order-2 '> 
              <img src={heroimage} alt="serum woman" />
              </div>
            </div>
        </div>
    </>
  )
}

export default Hero