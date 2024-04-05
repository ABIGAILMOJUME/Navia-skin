
import { useState } from "react";
import logo from '../Images/naviaskin.png'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [isMenuOPen,setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOPen);
    };
           


    return (  
        <> 
        <div className="bg-pink-one h-12 flex flex-row justify-center font-syne pt-3 border-t border-gray-300">
            <p className=" transition ease-in-out delay-500 text-grey-two hover:text-gray-400 ">
            NEW HYDRAFACIAL TREATMENT! BOOK ONLINE TODAY
            </p>
        </div>
        <div className="h-20 bg-grey-one border-b border-pink-two flex justify-between items-center">
                <a href=""><img src={logo} alt="" className=" w-56 pl-2 hover:shadow-sm"/></a>
              <ul className=" text-grey-two font-syne hidden md:flex  ">
                <li className="p-6 transition ease-in-out delay-150 hover:scale-x-110 hover:text-pink-two ">ABOUT</li>
                <li className="p-6 transition ease-in-out delay-150 hover:scale-x-110 hover:text-pink-two">SERVICES</li>
                <li className="p-6 transition ease-in-out delay-150 hover:scale-x-110 hover:text-pink-two">SHOP</li>
                <li className="p-6 transition ease-in-out delay-150 hover:scale-x-110 hover:text-pink-two">CONTACT</li>
                </ul>  
                <button className="bg-pink-two h-10 w-40 rounded-full mr-5 px-5 py-2 font-syne transition ease-in-out delay-500 text-grey-two hover:text-pink-one hover:scale-x-110 hidden md:flex">BOOK ONLINE</button>


                <div className="mr-3 block md:hidden" onClick={toggleMenu}>
                    {!isMenuOPen ?<AiOutlineClose size={30}/>: <AiOutlineMenu size={30}/> }
                </div>
                <div className={!isMenuOPen ? "fixed left-0 top-0 w-[60%] h-full border-r border-pink-50 bg-grey-one ease-out duration-500" : "fixed left-[-100%] "}>
                <a href=""><img src={logo} alt="" className=" w-56 pl-1 mt-2 hover:shadow-sm"/></a>
                    <ul className="p-2">
                <li className="p-4 transition ease-in-out delay-300 hover:text-pink-two border-b border-pink-one">ABOUT</li>
                <li className="p-4 transition ease-in-out delay-300 hover:text-pink-two border-b border-pink-one">SERVICES</li>
                <li className="p-4 transition ease-in-out delay-300 hover:text-pink-two border-b border-pink-one">SHOP</li>
                <li className="p-4 transition ease-in-out delay-300 hover:text-pink-two">CONTACT</li>    
                    </ul>
                </div>
        </div>
        </>
    );
}
 
export default Navbar; 