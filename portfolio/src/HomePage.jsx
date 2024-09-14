import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa"; // Removed unused FaNodeJs
import { SiFigma, SiTailwindcss } from "react-icons/si";
import erica from "../src/assets/erica.png";
import projects from "../src/data/projects.json";
import ProjectCard from "../src/components/projectCard.jsx";
import project0 from "./assets/project0.png";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/project5.png";
import project6 from "./assets/project6.png";
import project7 from "./assets/project7.png";
import { Link } from 'react-router-dom';


const imageMap = {
    project0,
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
};

const proficiency = [
    { name: "HTML5", icon: FaHtml5, years: "2 Years", level: "Advanced" },
    { name: "CSS3", icon: FaCss3Alt, years: "2 Years", level: "Advanced" },
    { name: "JavaScript", icon: FaJs, years: "2 Years", level: "Advanced" },
    { name: "ReactJS", icon: FaReact, years: "1 Year", level: "Advanced" },
    { name: "Figma", icon: SiFigma, years: "1 Year", level: "Intermediate" },
    { name: "TailwindCSS", icon: SiTailwindcss, years: "1 Year", level: "Advanced" },
];

const languagesSpoken = [
    { language: "English", level: "Advanced" },
    { language: "French", level: "Advanced" },
    { language: "Kirundi", level: "Native" },
    { language: "Kinyarwanda", level: "Advanced" },
    { language: "Swahili", level: "Beginner" },
];

const experiences = [
    {
        title: "Frontend Engineer / Team Lead",
        company: "Synapse Squad - A2SV AI for Impact Hackathon 2024",
        duration: "July 2024 - Present",
        description: "Led a team by overseeing project tasks, ensuring proper documentation, and managing timely submissions. Contributed to frontend development, coordinating efforts to deliver a functional and polished product."
    },
    {
        title: "Software Engineer Intern",
        company: "Teeket Events and Experiences - Remote",
        duration: "May 2024 - Present",
        description: "Developed and maintained front-end the admin dashboard using ReactJS."
    },
    {
        title: "Software Engineer Intern",
        company: "ACLIS - Bujumbura",
        duration: "October 2023 - December 2023",
        description: "Worked on various web development projects using JavaScript and HTML/CSS."
    }
];

const education = [
    {
        degree: "Bachelor of Science in Software Engineering",
        institution: "AFRICAN LEADERSHIP UNIVERSITY, Kigali, Rwanda",
        duration: "May 2022 - Present"
    },
    {
        degree: "Frontend Developer",
        institution: "AZUBI AFRICA, Ghana",
        duration: "October 2023 - Present"
    }
];

const extracurricularActivities = [
    {
        activity: "Google Developers Group Member",
        location: "Bujumbura, Burundi",
        description: "Active participant in local developer meetups and events."
    },
    {
        activity: "Volunteering Focolari Movement",
        location: "Bujumbura, Burundi",
        description: "Participation in local meetups and charity events."
    }
];

function HomePage() {
    const { id } = useParams();
    const filteredProjects = id ? projects.filter(project => project.id === id) : projects;

    const [activeSection, setActiveSection] = useState("experience");

    return (
        <>
            <div className="HomePage m-0 p-0 bg-black font-space border-none">
                <div className="px-4 lg:px-32 w-full">
                    {/* Hero Section */}
                    <div className="flex flex-col-reverse md:flex-row items-center -mt-2 pb-12 border-b border-grey border-t-none w-full">
                        {/* Introduction */}
                        <div className="flex-row w-full lg:w-full justify-center md:justify-between text-center md:text-start space-y-8">
                            <h2 className="text-white text-4xl lg:text-88px md:text-48px mb-4 ">Nice to meet you!
                                I'm <span className="border-b-4 border-green">Erica-Livia.</span>
                            </h2>
                            <p className="text-grey text-lg md:text-18px w-full md:w-4/6">Based in Kigali, I’m a front-end developer
                                passionate about building accessible web apps that users love.</p>

                            <button className="text-white border-b border-b-green pb-2 hover:text-green mt-4 md:mt-0 "><a href="#contact">CONTACT ME</a></button>
                        </div>
                        {/* Picture */}
                        <div className="w-full md:w-1/2 flex justify-center md:justify-items-end lg:justify-center">
                            <img src={erica} alt="erica" className="w-52 h-fit bg-darkGrey lg:w-96 md:w-96 mb-8 lg:pb-0" />
                        </div>
                    </div>
                    {/* Proficiency Section */}
                    <div className="py-16 mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                            <h2 className="text-white text-4xl lg:text-88px md:text-6xl">Skills</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-8 pb-16 border-b">
                            {proficiency.map((skill, index) => (
                                <div key={index} className="text-center">
                                    <skill.icon className="text-white text-5xl md:text-88px mb-4 mx-auto" />
                                    <h2 className="text-white text-2xl md:text-48px">{skill.name}</h2>
                                    <p className="text-grey text-lg md:text-18px">{skill.years} of Experience</p>
                                    <p className="text-grey text-lg md:text-18px">{skill.level}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="pb-16">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                            <h2 className="text-white text-4xl lg:text-88px md:text-6xl">Projects</h2>
                            <button className="text-white border-b border-b-green pb-2 hover:text-green mt-4 md:mt-0"><a href="#contact">CONTACT ME</a></button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-8">
                            {filteredProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    image={imageMap[project.image]}
                                    title={project.title}
                                    languages={project.languages}
                                    live={project.live}
                                    code={project.code}
                                />
                            ))}
                        </div>
                    </div>

                    {/* More Section */}
                    <div className="py-16 pb-24 mx-auto border-t border-grey">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                            <h2 className="text-white text-4xl lg:text-88px md:text-6xl">More</h2>
                        </div>
                        <div className="flex justify-center mb-8">
                            <div className="block md:hidden relative">
                                <select onChange={(e) => setActiveSection(e.target.value)}
                                        className="text-lg md:text-18px bg-black text-white border border-gray-600 rounded px-4 py-2">
                                    <option value="experience" className="text-grey">Experience</option>
                                    <option value="languages" className="text-grey">Languages Spoken</option>
                                    <option value="education" className="text-grey">Education</option>
                                    <option value="extracurricular" className="text-grey">Extracurricular</option>
                                </select>
                            </div>
                            <nav className="hidden md:flex space-x-4 text-lg md:text-18px">
                                <button onClick={() => setActiveSection("experience")}
                                        className={`text-white ${activeSection === "experience" && "border-b-2 border-green"}`}>Experience</button>
                                <button onClick={() => setActiveSection("languages")}
                                        className={`text-white ${activeSection === "languages" && "border-b-2 border-green"}`}>Languages Spoken</button>
                                <button onClick={() => setActiveSection("education")}
                                        className={`text-white ${activeSection === "education" && "border-b-2 border-green"}`}>Education</button>
                                <button onClick={() => setActiveSection("extracurricular")}
                                        className={`text-white ${activeSection === "extracurricular" && "border-b-2 border-green"}`}>Extracurricular</button>
                            </nav>
                        </div>
                        <div className="py-8">
                            {activeSection === "experience" && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                                    {experiences.map((experience, index) => (
                                        <div key={index} className="text-left">
                                            <h3 className="text-white text-2xl md:text-48px">{experience.title}</h3>
                                            <p className="text-grey text-lg md:text-18px">{experience.company}</p>
                                            <p className="text-grey text-lg md:text-18px">{experience.duration}</p>
                                            <p className="text-grey text-lg md:text-18px">{experience.description}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {activeSection === "languages" && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                                    {languagesSpoken.map((language, index) => (
                                        <div key={index} className="text-center">
                                            <h2 className="text-white text-2xl md:text-48px">{language.language}</h2>
                                            <p className="text-grey text-lg md:text-18px">{language.level}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {activeSection === "education" && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                                    {education.map((edu, index) => (
                                        <div key={index} className="text-left">
                                            <h3 className="text-white text-2xl md:text-48px">{edu.degree}</h3>
                                            <p className="text-grey text-lg md:text-18px">{edu.institution}</p>
                                            <p className="text-grey text-lg md:text-18px">{edu.duration}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {activeSection === "extracurricular" && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                                    {extracurricularActivities.map((activity, index) => (
                                        <div key={index} className="text-left">
                                            <h3 className="text-white text-2xl md:text-48px">{activity.activity}</h3>
                                            <p className="text-grey text-lg md:text-18px">{activity.location}</p>
                                            <p className="text-grey text-lg md:text-18px">{activity.description}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Floating Button */}

                
                    <button
                     
                ><Link to="/onmyradar" className="fixed bottom-8 right-8 bg-green text-white p-4 rounded-full shadow-lg hover:bg-darkGreen transition-colors animate-pulse">
                    Life Highlights
                </Link>
                </button>
                
                
            </div>
        </>
    );
}

export default HomePage;
