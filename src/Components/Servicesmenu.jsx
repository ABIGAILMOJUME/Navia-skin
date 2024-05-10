import afrowoman from '../Images/afro woman.jpg'
import { FaPlus } from "react-icons/fa6";
import React from 'react'

const Servicesmenu = () => {
  return (

    <div className="flex flex-col md:flex-row ">
        <div className=" flex-col hover:brightness-75">
        <h4 className="inline-flex rounded-sm p-3 bg-pink-three text-grey-one md:-rotate-90 md:origin-top-left tracking-widest font-syne font-semibold text-sm justify-center items-center text-center absolute md:mt-96 md:w-96 md:ml-24 lg:mt-96 lg:w-96 lg:ml-32">OUR SERVICES MENU</h4>
        <div>
            <img className='flex w-screen md:h-96 md:w-dvw md:ml-32 lg:h-96 lg:w-80 lg:ml-40' src={afrowoman} alt="afro" />
        </div>
        </div>

        <div className='flex flex-col items-end mx-auto'>
            <h4 className='text-one text-center border-b border-pink-one py-6'>LETS ENHANCE YOUR NATURAL BEAUTY </h4>
            <h4 className='flex transition ease-in-out delay-500 font-urbanist text-center md:text-left text-4xl leading-6 md:leading-10 text-grey-two hover:text-pink-three py-10 border-b border-pink-one'>Facial Treatments <a href=""></a><FaPlus className='ml-14 pb-2  fill-pink-three'/></h4>
            <h4 className='flex transition ease-in-out delay-500 font-urbanist text-center md:text-left text-4xl leading-6 md:leading-10 text-grey-two hover:text-pink-three py-10 border-b border-pink-one'>Chemical Peels <a href=""></a><FaPlus className='ml-24 pb-2  fill-pink-three' /></h4>
            <h4 className='flex transition ease-in-out delay-500 font-urbanist text-center md:text-left text-4xl leading-6 md:leading-10 text-grey-two hover:text-pink-three py-10'>Body Treatments <a href=""></a><FaPlus className='ml-16 pb-2 fill-pink-three'/></h4>

        </div> 
</div>


  )
}

export default Servicesmenu