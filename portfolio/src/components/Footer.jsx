import React from "react";
import { SiFrontendmentor, SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <div className="bg-darkGrey font-space text-white px-4 md:px-32 py-8">
            <div className="flex flex-col md:flex-row pt-8 pb-20 border-b border-grey">
                <div className="w-full md:w-1/2 md:pr-8 space-y-5">
                    <h2 className="text-white text-4xl md:text-88px">Contact</h2>
                    <p className="text-grey text-lg md:text-18px">
                        I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
                    </p>
                </div>
                <div className="w-full md:w-1/3 mt-4 md:mt-0">
                    <form className="space-y-4">
                        <div>
                            <input placeholder="NAME" type="text" id="name" className="w-full p-2 bg-darkGrey text-white border-b border-grey focus:outline-none" />
                        </div>
                        <div>
                            <input placeholder="EMAIL" type="email" id="email" className="w-full p-2 bg-darkGrey text-white border-b border-grey focus:outline-none" />
                        </div>
                        <div>
                            <textarea placeholder="MESSAGE" id="message" className="w-full p-2 bg-darkGrey text-white border-b border-grey focus:outline-none h-28"></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="text-white border-b border-b-green pb-2 hover:text-green">
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="md:flex text-center md:justify-between text-2xl md:text-18px py-8 space-y-5">
                <a>ericalivia</a>
                <ul className="list-none flex gap-x-5 justify-center">
                    <li>
                        <a href="https://github.com/Erica-Livia/" target="_blank" rel="noopener noreferrer">
                            <SiGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.frontendmentor.io/profile/Erica-Livia" target="_blank" rel="noopener noreferrer">
                            <SiFrontendmentor />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/erica-livia/" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/EricaLivia" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
