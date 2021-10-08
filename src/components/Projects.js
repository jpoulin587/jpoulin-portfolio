import React from 'react';
import { projects } from "../projectData";

const Projects = () => {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <h1 className="sm:text-4x1 text-3x1 font-medium title-font mb-4 text-white">
                        Recent Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    These are some of the apps I have built myself or as part of a team to help be develop my skills
                    </p>
                </div>
                <div className="grid grid-flow-row grid-cols-2 -m-2">
                    {projects.map((project) => (
                        <a
                        /*href={project.githubLink}*/
                        href={project.deployedLink}
                        key={project.image}
                        className="col-span-2 sm:col-span-1 p-8">
                        <div className="flex relative">
                            <img
                                alt="gallery"
                                className="absolute inset-0 w-auto h-auto rounded-lg object-cover object-center"
                                src={project.image}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    {project.subtitle}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {project.title}
                                </h1>
                                <p className="leading-relaxed">{project.description}  </p>
                            </div>

                        </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects
