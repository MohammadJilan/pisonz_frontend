import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faShoppingCart, faGamepad, faSearch, faBell, faBars, faPhone } from '@fortawesome/free-solid-svg-icons';
import HeaderProfileSection from "./HeaderProfileSection";
import HeaderSideMenu from "./HeaderSideMenu";
import Logo from "../../Materials/Logo.png"

const PageHeader = ({searchTerm="", setSearchTerm, searchDisabled, searchHidden=true}) => {
    const DropDownRef = useRef(null);
    const [dropDownHidden, setDropDownHidden] = useState(true);

    const handleDropDown = () => {
        if (DropDownRef) {
            DropDownRef.current.classList.toggle("invisible");

        }
    }

    // Passing search data up
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="bg-[#2A2A2D] fixed top-0 left-0 w-full z-50 drop-shadow-xl">

            <div className="h-20 sm:h-32 sm:border-b flex flex-row items-center">

                <a href="/"><img src={Logo} className="size-[4rem] sm:size-[6rem] sm:ml-8"></img></a>


                <div id="MySearchBar" className={`basis-1/3 sm:basis-1/6 h-[1.5rem] flex flex-row ${searchHidden ? "invisible" : ""}`}>
                    <FontAwesomeIcon icon={faSearch} className="text-white size-2 sm:size-3 absolute pt-1.5 sm:pt-2.5 pl-1.5 sm:pl-2" />
                    <input value={searchTerm} onChange={handleSearchChange} placeholder="Cari permainan" type="text" className="flex-1 border border-white bg-transparent rounded-full h-[1.2rem] sm:h-8 text-[8px] sm:text-[15px] w-1/2 text-white px-5 sm:px-8" disabled={searchDisabled}/>
                </div>

                <div id="MyHeaderFiller" className="basis-1/4 sm:basis-[65%]">

                </div>

                <div className="flex flex-row justify-center align-middle items-center text-white gap-6">
                    <HeaderProfileSection />
                    <HeaderSideMenu />
                </div>



            </div>
            <div className="hidden xl:block h-15 py-5 text-white font-semibold">
                <div id="navlinks" className="flex flex-row ml-[8%] gap-10">
                    <div><a href="/"><FontAwesomeIcon icon={faGamepad} className="mr-2"/><span className="text-lg">Permainan</span></a></div>
                    <div><a href="/cart"><FontAwesomeIcon icon={faShoppingCart} className="mr-2"/><span className="text-lg">Keranjang</span></a></div>
                    <div><a href="#Footer"><FontAwesomeIcon icon={faPhone} className="mr-2"/><span className="text-lg"></span>Hubungi kami</a></div>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;