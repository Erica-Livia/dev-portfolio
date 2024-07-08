import React from "react";
import { SiGithub, SiFrontendmentor } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

function Navbar() {
    return (
        <div className="navbar bg-black font-space text-white px-8 xl:px-32 sm:px-4 py-6">
            <div className="md:flex text-center md:justify-between text-2xl md:text-18px  border-none space-y-2">
                <div className="text-24px sm:text-center">ericalivia</div>
                <ul className="list-none text-24px flex space-x-8 mt-0 sm:mt-0 justify-center">
                    <li><a href="https://github.com/Erica-Livia/" target="_blank" rel="noopener noreferrer"><SiGithub /></a></li>
                    <li><a href="https://www.frontendmentor.io/profile/Erica-Livia" target="_blank" rel="noopener noreferrer"><SiFrontendmentor /></a></li>
                    <li><a href="https://www.linkedin.com/in/erica-livia/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a></li>
                    <li><a href="https://twitter.com/EricaLivia" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
