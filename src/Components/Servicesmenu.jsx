import React from "react";
import { FaPlus } from "react-icons/fa6";
import afrowoman from "../Images/afro woman.jpg";

const Servicesmenu = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col md:flex-row ">
        <div className="lg:w-1/2 flex-col hover:brightness-75 ">
          <h4 className="inline-flex rounded-sm p-3 bg-pink-three text-grey-one md:-rotate-90 md:origin-top-left tracking-widest font-syne font-semibold text-sm justify-center items-center text-center absolute md:mt-96 md:w-96 md:ml-24 lg:mt-96  ">
            OUR SERVICES MENU
          </h4>
          <div>
            <img
              className="flex md:h-hero w-full sm:px-10 md:px-20 lg:px-32 lg:h-hero mx-auto "
              src={afrowoman}
              alt="afro"
            />
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col mx-auto">
          <h4 className="text-one border-b border-pink-one py-6">
            LETS ENHANCE YOUR NATURAL BEAUTY
          </h4>
          <h4 className="flex transition ease-in-out delay-500 font-urbanist text-center md:text-left text-4xl sm:leading-8 md:leading-10 text-grey-two hover:text-pink-three py-10 border-b border-pink-one">
            Facial Treatments <a href=""></a>
            <FaPlus className=" size-6 ml-10 my-auto fill-pink-three" />
          </h4>
          <h4 className="flex transition ease-in-out delay-500 font-urbanist text-center md:text-left text-4xl sm:leading-8 md:leading-10 text-grey-two hover:text-pink-three py-10 border-b border-pink-one">
            Chemical Peels <a href=""></a>
            <FaPlus className="size-6 ml-20 my-auto fill-pink-three" />
          </h4>
          <h4 className="flex transition ease-in-out delay-500 font-urbanist text-center md:text-left text-4xl sm:leading-8 md:leading-10 text-grey-two hover:text-pink-three py-10">
            Body Treatments <a href=""></a>
            <FaPlus className="size-6 ml-12 my-auto fill-pink-three" />
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Servicesmenu;
