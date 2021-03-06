import React from 'react'
import { skills } from '../projectData'

const Skills = () => {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto md:text-center">
                <div className="mb-20">
                    <h1 className="sm:text-4xl text-3xl mt-8 font-medium title-font text-white md-4">
                        Skills &amp; Technologies
                    </h1>
                    <p>
                        In addition to my new web development skills, I have developed many other skills over my career.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/4 w-full  align-middle">
                <div className="bg-gray-800 rounded flex p-4 h-full">
                    <span className="title-font font-medium text-white">
                    {skill}
                    </span>
                </div>
            </div>
            ))}
                </div>

            </div>


        </section>
    )
}

export default Skills
