import React from "react";
import {useParams} from "react-router-dom";
import erica from "../src/assets/erica.png";
import man from "../src/assets/man.png";
import projects from "../src/data/projects.json";
import ProjectCard from "./components/projectCard.jsx";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/project5.png";
import project6 from "./assets/project6.png";




const imageMap={
    "project1" : project1,
    "project2" : project2,
    "project3" : project3,
    "project4" : project4,
    "project5" : project5,
    "project6" : project6,

}

function HomePage() {

    const { id } = useParams();
    const filteredProjects = id ? projects.filter(project => project.id === id) : projects;
    return (
        <>
            <div className="HomePage m-0 p-0 bg-black font-space">
                <div className="px-32">
                {/*    Hero Section*/}
                    <div className="flex items-center justify-between pb-16 border-b border-grey">
                    {/*    Introduction*/}
                        <div className="container w-6/7">
                            <div className="flex-col justify-between text-start space-y-8">
                                <h2 className="text-white text-88px">Nice to meet you!
                                I'm <span className="underline-offset-1">Erica-Livia</span>
                                </h2>
                                <p className="text-grey text-18px w-1/2">Based in the Kigali, I’m a front-end developer passionate about building accessible web apps that users love.</p>

                                <button className="text-white border-b border-b-green pb-2 hover:text-green">CONTACT ME</button>
                            </div>
                        </div>
                    {/*    Picture*/}
                        <div className="flex w-1/2 justify-center">
                            <img src={man} alt="erica" className="w-80 h-fit" />
                        </div>
                    </div>
                {/*    Proficiency Section*/}
                    <div className="py-16">
                        <div className="grid grid-cols-3 gap-x-16 gap-y-12">
                            <div>
                                <h2 className="text-white text-48px text-start">HTML</h2>
                                <p className="text-grey text-18px text-start">3 Years of Experience</p>
                            </div>
                            <div>
                                <h2 className="text-white text-48px text-start">CSS</h2>
                                <p className="text-grey text-18px text-start">3 Years of Experience</p>
                            </div>
                            <div>
                                <h2 className="text-white text-48px text-start">Javascript</h2>
                                <p className="text-grey text-18px text-start">3 Years of Experience</p>
                            </div>
                            <div>
                                <h2 className="text-white text-48px text-start">Accessibility</h2>
                                <p className="text-grey text-18px text-start">3 Years of Experience</p>
                            </div>
                            <div>
                                <h2 className="text-white text-48px text-start">React</h2>
                                <p className="text-grey text-18px text-start">3 Years of Experience</p>
                            </div>
                            <div>
                                <h2 className="text-white text-48px text-start">SASS</h2>
                                <p className="text-grey text-18px text-start">3 Years of Experience</p>
                            </div>
                        </div>
                    </div>
                {/*    Projects Section*/}
                    <div className="py-16">
                        <div className="flex justify-between items-center ">
                            <h2 className="text-white text-88px">Projects</h2>
                            <button className="text-white border-b border-b-green pb-2 hover:text-green">CONTACT ME</button>
                        </div>
                        <div className="grid grid-cols-2 gap-8 py-8">
                            {filteredProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                image = {imageMap[project.image]}
                                title = {project.title}
                                languages = {project.languages}
                                live = {project.live}
                                code = {project.code}
                                />
                                )
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomePage;