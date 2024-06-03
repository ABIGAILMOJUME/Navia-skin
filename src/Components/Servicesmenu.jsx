import React from "react";
import { FaPlus } from "react-icons/fa6";
import afrowoman from "../Images/afro woman.jpg";

const ServicesMenu = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:w-w90">
        <div className="lg:w-1/2 flex-col hover:brightness-25 ">
          <h4 className="inline-flex p-3 bg-pink-three text-grey-one md:-rotate-90 md:origin-top-left tracking-widest font-syne font-semibold text-sm justify-center items-center text-center absolute md:mt-m28 md:w-w28 md:ml-16 lg:mt-m28 lg:ml-24">
            OUR SERVICES MENU
          </h4>
          <div className="container flex md:h-hero w-full sm:px-10 md:px-20 lg:px-32 lg:h-hero " >
            <img
              className=""
              src={afrowoman}
              alt="afro"
            />
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col mx-auto">
          <h4 className="text-one border-b border-pink-one py-6">
            LETS ENHANCE YOUR NATURAL BEAUTY
          </h4>
          <h4 className="flex transition ease-in-out delay-500 font-playfair text-center md:text-left text-4xl md:text-4xl lg:text-5xl sm:leading-8 md:leading-10 text-grey-two hover:text-pink-three py-10 border-b border-pink-one">
            Facial Treatments <a href=""></a>
            <FaPlus className=" size-6 ml-10 my-auto fill-pink-three" />
          </h4>
          <h4 className="flex transition ease-in-out delay-500 font-playfair text-center md:text-left text-4xl md:text-4xl lg:text-5xl sm:leading-8 md:leading-10 text-grey-two hover:text-pink-three py-10 border-b border-pink-one">
            Chemical Peels <a href=""></a>
            <FaPlus className="size-6 ml-20 my-auto fill-pink-three" />
          </h4>
          <h4 className="flex transition ease-in-out delay-500 font-playfair text-center md:text-left text-4xl md:text-4xl lg:text-5xl sm:leading-8 md:leading-10 text-grey-two hover:text-pink-three py-10">
            Body Treatments <a href=""></a>
            <FaPlus className="size-6 ml-12 my-auto fill-pink-three" />
          </h4>
        </div>
      </div>
    </>
  );
};

export default ServicesMenu;
