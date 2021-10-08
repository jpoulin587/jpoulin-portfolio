import React from 'react';
import { projects } from "../projectData";

const Projects = () => {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <p>from the Projects component</p> 
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <h1 className="sm:text-4x1 text-3x1 font-medium title-font mb-4 text-white">
                        Recent Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    These are some of the apps I have built myself or as part of a team to help be develop my skills
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                        href={project.githubLink}
                        href={project.deployedLink}
                        key={project.image}
                        className="sm-w-1/2 w-100 p-4">
                        <div className="sm-w w-100 p-4">
                            <img
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                srr="project.image"
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2>

                                </h2>
                                <h1>

                                </h1>
                                <p>  </p>
                            </div>

                        </div>
                    ))

                    }
                        </a>
                </div>


            </div>

        </section>
    )
}

export default Projects
