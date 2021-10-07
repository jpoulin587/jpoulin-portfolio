import React from 'react'

const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                    <h1 className="title-font ms:text-4x1 text-3x1 mb-4 font-medium text-white">
                    James "Jim" Poulin
                    <br/> 
                    Web development and more
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    Full stack developer with extensive background supporting, testing, and evaluating customer (user) facing web and mobile applications.  I have several years of experience simultaneously collaborating with sales, operational, and technical teams.  Earning a certificate in Full Stack Web Development from the Rice University Coding Boot Camp (expected completion Nov. 2021).
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact" 
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Reach out to me
                        </a>

                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:text-white rounded text-lg"   >
                            Projects I've been working on
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="./laptop-sit.jpg"
                />
                </div>
        </div>
        </section>
    )
}

export default About
