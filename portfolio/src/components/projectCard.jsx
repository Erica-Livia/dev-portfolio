import React from "react";

function ProjectCard({ title, image, languages, live, code }) {
    return (
        <div className="relative group">
            <div className="overflow-hidden">
                <img src={image} className="w-full transition-transform duration-300 " alt={title} />
                <div className="absolute -top-0 inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={live} target="_blank" rel="noopener noreferrer" className="text-white mb-2 border-b border-green hover:text-green">VIEW PROJECT</a>
                    <a href={code} target="_blank" rel="noopener noreferrer" className="text-white border-b border-green hover:text-green">VIEW CODE</a>
                </div>
            </div>
            <h2 className="text-white text-24px mt-3">{title}</h2>
            <p className="text-grey text-18px">{languages.join(", ")}</p>
        </div>
    );
}

export default ProjectCard;
