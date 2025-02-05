import React, { useRef, useState } from "react";
import HeaderSideMenu from "./HeaderSideMenu";
import Swal from 'sweetalert2';

const HeaderProfileSection = ({profilePicture}) => {
    const DropDownRef = useRef(null);
    const fileUploadRef = useRef(null);
    

    const logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login";
    }

    const pickImage = () => {
        console.log("clicked");
        fileUploadRef.current.click();
    }

    const uploadProfilePicture = async() => {
        // getting the image.
        const file = fileUploadRef.current.files[0];

        const body = new FormData();
        body.append("image", file);

        const data = {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
            },
            body: body
        }
        
        const response = await fetch("http://localhost:8000/API/uploadprofilepicture", data);
        const result = await response.json();
        
        if(result.error){
            Swal.fire({
                title:"Error",
                icon:'error',
                text:"Hanya file PNG, JPG, dan JPEG yang didukung."
            });
        }else if(!result.success){
            Swal.fire({
                title:"Error",
                icon:'error',
                text:"Terjadi kesalahan yang tidak diketahui!"
            });
        }

        window.location.reload();
    }

    const handleDropDown = (props) => {
        if(DropDownRef){
            DropDownRef.current.classList.toggle("invisible");

        }
    }

    return(
        <div id="MyProfilePic" className="sm:mr-0 xl:mr-0">
                    <div id="MyProfilePicWrapper" className="rounded-full h-[19px] w-[19px] sm:h-[35px] sm:w-[35px] hover:border flex items-center justify-center" onClick={handleDropDown}>
                    <img id="MyProfile" src={profilePicture} className="sm:h-[30px] sm:w-[30px] w-[15px] h-[15px] object-cover rounded-full"></img>
                    </div>

                    <div id="MyProfileDropDown">
                        <div ref={DropDownRef} className="bg-white w-20 ml-[-65px] text-black rounded-sm flex flex-col absolute divide-y text-[10px] text-right invisible" tabIndex={-1}>
                            <a onClick={pickImage} className="hover:bg-gray-500 w-full h-full p-1">Ubah Gambar</a>
                            <input onChange={uploadProfilePicture} className="hidden" type="file" accept="image/png, image/jpeg, image/jpg" ref={fileUploadRef}></input>
                            <a onClick={logout} className="hover:bg-gray-500 w-full h-full p-1">Keluar</a>
                        </div>

                    </div>
                </div>
    );
}

HeaderProfileSection.defaultProps = {

};

export default HeaderProfileSection;