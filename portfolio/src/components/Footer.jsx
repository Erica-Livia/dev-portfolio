import React from "react";
import { SiFrontendmentor, SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <div className="bg-darkGrey font-space text-white m-0 px-32">
            <div className="flex flex-col pt-8 mb-12 pb-8 border-b border-grey">
                <div className="flex justify-between">
                    <div className="w-1/2 space-y-5">
                        <h2 className="text-white text-88px">Contact</h2>
                        <p className="text-grey text-18px">
                            I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
                        </p>
                    </div>
                    <div className="forms w-1/3">
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
            </div>
            <div className="flex justify-end text-24px pb-5">
                <ul className="list-none flex gap-x-5">
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
