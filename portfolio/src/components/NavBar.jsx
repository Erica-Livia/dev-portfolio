import React from "react";
import { SiGithub, SiFrontendmentor } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

function Navbar() {
    return (
        <div className="navbar bg-black flex font-space text-white px-8 xl:px-32 md:px-32 sm:px-8 py-5">
            <div className="container flex xl:flex  md:flex sm:flex justify-between items-center">
                <div className="text-24px sm:text-center">ericalivia</div>
                <ul className="list-none flex gap-x-5 mt-3 sm:mt-0">
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
