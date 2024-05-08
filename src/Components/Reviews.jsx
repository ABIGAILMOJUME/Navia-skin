import React from 'react'
import reviewimage from '../Images/Reviewimage.jpg'
import { FaGrinStars } from "react-icons/fa";
const Reviews = () => {
  return (
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0 bg-grey-one">
    <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
        <img className="flex w-screen h-dvh md:w-9/12 lg:w-1/2 md:ml-24 " src={reviewimage} alt="review image"></img>
        <div className=" content bg-pink-four p-2 pt-8 md:p-12 pb-12 lg:max-w-lg md:w-9/12 w-full lg:absolute top-48 right-5 md:ml-24 xl:mr-8">
            <div className="flex justify-center font-bold text-5xl font-urbanist">
                <p>My Skin Has Been Glowing Ever Since!</p>
            </div>
            <p className="my-5 text-center font-light font-assistant text-grey-two text-base leading-8 tracking-wide">Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Autem aperiam nulla cupiditate saepe sed quis veritatis minus rem adipisci
                aliquid.</p>
  <p className="mt-2 flex text-one text-end text-lg justify-end">SARAH/FACIAL CLIENT <FaGrinStars className='mt-1 mx-2 size-5'/></p>


        </div>
    </section>
</section>
   
  )
}

export default Reviews