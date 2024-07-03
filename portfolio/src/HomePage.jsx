import React from "react";
import { useParams } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
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

const imageMap = {
    "project0": project0,
    "project1": project1,
    "project2": project2,
    "project3": project3,
    "project4": project4,
    "project5": project5,
    "project6": project6,
};

const proficiency = [
    { name: "HTML5", icon: FaHtml5, years: "2 Years", level: "Advanced" },
    { name: "CSS3", icon: FaCss3Alt, years: "2 Years", level: "Advanced" },
    { name: "JavaScript", icon: FaJs, years: "2 Years", level: "Advanced" },
    { name: "ReactJS", icon: FaReact, years: "1 Year", level: "Advanced" },
    { name: "NodeJS", icon: FaNodeJs, years: "1/2 Year", level: "Beginner" },
    { name: "Figma", icon: SiFigma, years: "1 Year", level: "Intermediate" },
    { name: "TailwindCSS", icon: SiTailwindcss, years: "1 Year", level: "Advanced" },
];

function HomePage() {
    const { id } = useParams();
    const filteredProjects = id ? projects.filter(project => project.id === id) : projects;

    return (
        <>
            <div className="HomePage m-0 p-0 bg-black font-space border-none">
                <div className="px-4 lg:px-32">
                    {/* Hero Section */}
                    <div className="flex flex-col-reverse md:flex-row items-center pb-16 border-b border-grey border-t-none">
                        {/* Introduction */}
                        <div className="flex-row w-full lg:w-4/5 justify-center md:justify-between text-center md:text-start space-y-8">
                            <h2 className="text-white text-4xl lg:text-88px md:text-48px mb-4 ">Nice to meet you!
                                I'm <span className="border-b-4 border-green">Erica-Livia.</span>
                            </h2>
                            <p className="text-grey text-lg md:text-18px">Based in Kigali, I’m a front-end developer
                                passionate about building accessible web apps that users love.</p>

                            <button className="text-white border-b border-b-green pb-2 hover:text-green mt-4 md:mt-0 ">CONTACT
                                ME
                            </button>
                        </div>
                        {/* Picture */}
                        <div className="w-full md:w-1/2 flex justify-center md:justify-items-end lg:justify-center">
                            <img src={erica} alt="erica" className="w-52 h-fit bg-darkGrey lg:w-96 md:w-96 mb-8 lg:pb-0"/>
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
                                    <skill.icon className="text-white text-5xl md:text-88px mb-4 mx-auto"/>
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
                            <button className="text-white border-b border-b-green pb-2 hover:text-green mt-4 md:mt-0">CONTACT ME
                            </button>
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
                </div>
            </div>
        </>
    );
}

export default HomePage;
