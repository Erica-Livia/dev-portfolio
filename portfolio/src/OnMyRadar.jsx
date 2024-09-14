import React from "react";
import menya1 from './assets/menya1.png';
import azubi from './assets/azubi.jpg';
import menya2 from './assets/menya2.jpg';
import synapsetop3 from './assets/synapsetop3.jpg';
import { Link } from 'react-router-dom';

const radarUpdates = [
    {
        image: menya1,
        caption: "Discover the story behind Strong Sister and how we aim to empower women in Burundi. Our goals, achievements, and vision for a safer future continue to inspire change.",
        link: "https://strong-sister.vercel.app/"
    },
    {
        image: azubi,
        caption: "A proud moment! Graduating from Azubi Africa’s Frontend Developer program has equipped me with the skills to build powerful web applications. Onward to new challenges!",
        // No link provided for this update
    },
    {
        image: menya2,
        caption: "Honored to be a guest at the Menya Accelerator Cohort 3 closing party! Sharing my experiences and learning from industry leaders has been an invaluable part of my journey.",
        link: "https://www.instagram.com/p/C_coJOjCFZ6/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
    },
    {
        image: synapsetop3,
        caption: "The Synapse Squad made it to the semifinals in the A2SV AI for Impact Hackathon! Competing with top teams, we brought our Strong Sister project to the spotlight and placed among the top 3 in the quarterfinals. Proud of this milestone!",
        link: "https://www.linkedin.com/posts/a2sv_a2sv-hackathon-techforgood-activity-7222961730992144384-Mdxx?utm_source=share&utm_medium=member_desktop"
    },
    {
        image: synapsetop3, // Reusing the same image as a placeholder
        caption: "Excited to collaborate with fellow developers and innovators at the upcoming Google Developer Group event in Kigali! Looking forward to networking and learning from some amazing minds.",
        // No link provided for this update
    }
];

function OnMyRadar() {
    return (
        <div className="OnMyRadar py-16 pb-24 mx-auto bg-black">
            <h2 className="text-white text-4xl lg:text-88px md:text-6xl mb-8 text-center">
                On My Radar
            </h2>

            <h6 className="text-white text-2xl lg:text-48px md:text-4xl mb-8 text-center">Explore what's happening in Livia's Life</h6>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
                {radarUpdates.map((update, index) => (
                    <div key={index} className="radar-card bg-darkGrey p-4 rounded-lg shadow-lg">
                        <img src={update.image} alt="update" className="w-full h-48 object-cover mb-4 rounded" />
                        <p className="text-grey text-lg md:text-18px">{update.caption}</p>

                        {/* Conditionally render the button if a link is provided */}
                        {update.link && (
                            <a
                                href={update.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white mt-4 inline-block bg-green hover:bg-darkGreen py-2 px-4 rounded"
                            >
                                See more
                            </a>
                        )}
                    </div>
                ))}
            </div>

            {/* Floating Button */}

            <button
                
            ><Link to="/" className="fixed bottom-8 right-8 bg-green text-white p-4 rounded-full shadow-lg hover:bg-darkGreen transition-colors">
                    Back to Home
                </Link>
            </button>

        </div>
    );
}

export default OnMyRadar;
