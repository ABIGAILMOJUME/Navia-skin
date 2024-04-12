import afrowoman from '../Images/afro woman.jpg'

import React from 'react'

const Servicesmenu = () => {
  return (

    <div className="flex flex-col md:flex-row items-center">
        <div className="md:flex-col">
        <h4 className="inline-flex rounded-sm p-3 bg-pink-three text-grey-one md:-rotate-90 md:origin-top-left tracking-widest font-syne font-semibold text-sm justify-center items-center text-center absolute md:mt-96 md:w-96 md:ml-24 lg:mt-96 lg:w-96 lg:ml-32">OUR SERVICES MENU</h4>
        <div>
            <img className='flex w-screen md:h-96 md:w-80 md:ml-32 lg:h-96 lg:w-96 lg:ml-40' src={afrowoman} alt="afro" />
        </div>
        </div>
</div>


  )
}

export default Servicesmenu