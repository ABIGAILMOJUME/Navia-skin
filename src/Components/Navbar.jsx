
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
        <div className="bg-pink-one h-16 md:h-12 flex flex-row justify-center text-center text-sm font-medium font-syne pt-5 md:pt-3 border-t border-gray-300">
            <p className=" transition ease-in-out delay-500 text-grey-two hover:text-gray-400 ">
            NEW HYDRAFACIAL TREATMENT! BOOK ONLINE TODAY
            </p>
        </div>
        <div className="h-20 bg-grey-one border-b border-pink-two flex justify-between items-center font-medium text-sm">
                <a href=""><img src={logo} alt="" className=" w-56 pl-2 hover:shadow-sm"/></a>
              <ul className=" text-grey-two font-syne hidden md:flex  ">
                <li  className="p-7 transition ease-in-out delay-150 hover:scale-x-110 hover:text-pink-two "><a href=""></a>ABOUT</li>
                <li className="p-7 transition ease-in-out delay-150 hover:scale-x-110 hover:text-pink-two"><a href=""></a>SERVICES</li>
                <li className="p-7 transition ease-in-out delay-150 hover:scale-x-110 hover:text-pink-two"><a href=""></a>SHOP</li>
                <li className="p-7 transition ease-in-out delay-150 hover:scale-x-110 hover:text-pink-two"><a href=""></a>CONTACT</li>
                
                </ul>  
                <button className="btn-one hidden md:flex md:p-3 mr-3 h-10 w-32 text-xs">BOOK ONLINE </button>

                    {/*menu for mobile */}
                <div className="mr-3 block md:hidden" onClick={toggleMenu}>
                    {isMenuOPen ?<AiOutlineClose size={30}/>: <AiOutlineMenu size={30}/> }
                </div>
                <div className={isMenuOPen ? "fixed left-0 top-0 w-[60%] h-full border-r border-pink-50 bg-grey-one ease-out duration-500" : "fixed left-[-100%] "}>
                <a href=""><img src={logo} alt="" className=" w-56 pl-1 mt-2 hover:shadow-sm"/></a>
                    <ul className="p-2">
                <li className="p-4 transition ease-in-out delay-300 hover:text-pink-two border-b border-pink-one"><a href=""></a>ABOUT</li>
                <li className="p-4 transition ease-in-out delay-300 hover:text-pink-two border-b border-pink-one"><a href=""></a>SERVICES</li>
                <li className="p-4 transition ease-in-out delay-300 hover:text-pink-two border-b border-pink-one"><a href=""></a>SHOP</li>
                <li className="p-4 transition ease-in-out delay-300 hover:text-pink-two"><a href=""></a>CONTACT</li>    
                    </ul>
                </div>
        </div>
        </>
    );
}
 
export default Navbar; 