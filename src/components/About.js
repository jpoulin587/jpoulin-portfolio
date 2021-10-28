import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                    <h1 className="title-font ms:text-4x1 text-3x1 mb-4 font-medium text-white">
                    James Poulin
                    <br/> 
                    Web development and more
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    Full stack developer with extensive background supporting, testing, and evaluating customer (user) facing web and mobile applications.  Over 10 years of experience working with cross functional teams including sales, operational, and technical teams.  Graduate of the Full Stack Web Development Boot Camp from Rice University (November 2010).
                    </p>
                    <div className="flex justify-center">
                        <Link
                            to="/contact" 
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Reach out to me
                        </Link>

                        <Link
                            to="/projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:text-white rounded text-lg"   >
                            Projects I've been working on
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className="object-cover object-center rounded-lg"
                    alt="hero"
                    src="./laptop-sit.jpg"
                />
                </div>
        </div>
        </section>
    )
}

export default About
