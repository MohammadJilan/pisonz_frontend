import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div id="Footer">
            <div className="bg-[#2A2A2D] text-white grid grid-cols-1 sm:grid-cols-2 sm:pt-16 xl:px-36">
                <div id="CompanyInfo" className="flex flex-col p-4 sm:px-24">
                    <div className="flex justify-center sm:justify-start">
                        <img src="https://i.imghippo.com/files/sYY5503UaY.png" className="size-24 sm:mb-2 sm:mt-[-15px] sm:ml-[-15px]"></img>
                    </div>
                    <div className="text-justify text-[13px] mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

                    <div id="SocialMediaLinksWrapper" className="flex gap-6 justify-center mb-3">
                        <FontAwesomeIcon icon={faTiktok} className="size-6 hover:animate-bounce" />
                        <FontAwesomeIcon icon={faInstagram} className="size-6 hover:animate-bounce" />
                        <FontAwesomeIcon icon={faWhatsapp} className="size-6 hover:animate-bounce" />
                    </div>

                </div>

                <div id="QuickLinks" className="grid grid-cols-2 sm:grid-cols-3 gap-y-12 p-4 text-[13px] mb-5">
                    <div id="quicklinks" className="flex flex-col gap-5 justify-start items-center">
                        <div className="font-bold">Tautan Cepat</div>
                        <div className="hover:underline"><a href="/register">Daftar</a></div>
                        <div className="hover:underline"><a href="/login">Masuk</a></div>
                        <div className="hover:underline"><a href="/">Permainan</a></div>
                        <div className="hover:underline"><a href="/cart">Keranjang</a></div>
                    </div>

                    <div id="socials" className="flex flex-col gap-5 justify-start items-center">
                        <div className="font-bold">Media Sosial</div>
                        <div className="hover:underline"><a href="https://www.facebook.com/pisonzstore">Facebook</a></div>
                        <div className="hover:underline"><a href="https://www.instagram.com/pisonz.store?igsh=djgwbnl4ZjBxcWx5">Instagram</a></div>
                        <div className="hover:underline"><a href="https://wa.me/+6281363512273">Whatsapp</a></div>
                    </div>

                    <div id="contactus" className="flex flex-col gap-5 justify-start items-center">
                        <div className="font-bold">Hubungi kami</div>
                        <div className="hover:underline"><a href="mailto:aboutpisonzstore@gmail.com">aboutpisonzstore@gmail.com</a></div>
                    </div>
                </div>
                
                <div className="sm:hidden border-b mx-3"></div>
                <div className="sm:hidden flex justify-center text-[13px] py-10">©2024 Pisonz Store. All Rights Reserved.</div>


            </div>
            
            <div id="FooterEndDesktop" className="sm:block hidden bg-[#2A2A2D] text-white pt-24">
                <div className="border-b mx-3"></div>
                <div className="flex justify-start mx-3 text-[13px] py-10">©2024 Pisonz Store. All Rights Reserved.</div>
            </div>
        </div>
    );
}

Footer.defaultProps = {

};

export default Footer;