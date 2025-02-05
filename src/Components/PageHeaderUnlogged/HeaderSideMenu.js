import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faSackDollar, faClose } from '@fortawesome/free-solid-svg-icons';

const HeaderSideMenu = (props) => {

    const [isVisible, setIsVisible] = useState(false);

    const toggle = () => {
        setIsVisible(!isVisible);
    }


    return (
        <div className="xl:hidden">
            <div onClick={toggle} className="xl:hidden">
                <FontAwesomeIcon icon={faBars} className="sm:h-[25px]" />
            </div>
            <div className={`w-[80vw] h-dvh pt-5 top-0 right-0 flex flex-col shadow-lg opacity-0 ${isVisible ? 'block' : 'hidden'} bg-[#2A2A2D] fixed z-50 ${isVisible ? 'animate-slideInFromRight' : 'animate-slideOutToRight'}`}>

                <div id="CloseSidebar" onClick={toggle}>
                    <FontAwesomeIcon icon={faClose} className="absolute right-1 top-1 sm:size-7" />
                </div>


                <div className="flex justify-center items-center h-10 sm:h-16 text-[10px] sm:text-[18px]">
                    <a href="/" className="text-white underline">Permainan</a>
                </div>
                <div className="flex justify-center items-center h-10 sm:h-16 text-[10px] sm:text-[18px]">
                    <a href="/cart" className="text-white underline">Keranjang</a>
                </div>
                <div className="flex justify-center items-center h-10 sm:h-16 text-[10px] sm:text-[18px]">
                    <a href="#Footer" className="text-white underline">Hubungu Kami</a>
                </div>

                <div className="w-[80vw] h-dvh pt-5 top-0 flex right-0 relative">
                    <p className="absolute bottom-0 pb-4 w-full text-center text-[10px] sm:text-[18px]">Pisonz @ 2024</p>
                </div>

            </div>
        </div>
    );
}

HeaderSideMenu.defaultProps = {

};

export default HeaderSideMenu;