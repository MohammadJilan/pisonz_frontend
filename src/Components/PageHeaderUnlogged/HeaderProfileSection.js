import React, { useRef } from "react";
import unloggedpfp from '../Materials/unlogged_user_pfp.jpg';

const HeaderProfileSection = () => {
    const DropDownRef = useRef(null);

    const handleDropDown = (props) => {
        if(DropDownRef){
            DropDownRef.current.classList.toggle("invisible");

        }
    }

    return(
        <div id="MyProfilePic" className="sm:mr-0 xl:mr-0">
                    <div id="MyProfilePicWrapper" className="rounded-full h-[19px] w-[19px] sm:h-[35px] sm:w-[35px] hover:border flex items-center justify-center" onClick={handleDropDown}>
                    <img id="MyProfile" src={unloggedpfp} className="sm:h-[30px] sm:w-[30px] w-[15px] h-[15px] object-cover rounded-full"></img>
                    </div>

                    <div id="MyProfileDropDown">
                        <div ref={DropDownRef} className="bg-white w-20 ml-[-65px] text-black rounded-sm flex flex-col absolute divide-y text-[10px] text-right invisible" tabIndex={-1}>
                            <a href="/register" className="hover:bg-gray-500 w-full h-full p-1">Daftar</a>
                            <a href="/login" className="hover:bg-gray-500 w-full h-full p-1">Masuk</a>
                        </div>

                    </div>
                </div>
    );
}

HeaderProfileSection.defaultProps = {

};

export default HeaderProfileSection;