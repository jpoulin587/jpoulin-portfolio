import React from 'react'

const Contact = () => {
    return (
        <section id="contact">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  MY HOMETOWN
                </h2>
                <p className="mt-1">
                  Ft. Lauderdale, FL
                  <br />
                  <br />
                </p>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  MY GITHUB
                </h2>
                <a href="https://github.com/jpoulin587"  className="text-indigo-400 mt-1">
                github.com/jpoulin587
                </a>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <p className="text-indigo-400 leading-relaxed">
                  jpoulin587a@gmail.com
                </p>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
                <br />
                
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  LinkedIn
                </h2>
                <a href="https://www.linkedin.com/in/jim-poulin/" className="text-indigo-400 leading-relaxed">
                www.linkedin.com/in/jim-poulin/
                </a>
                
              </div>
            </div>
          </div>
          
        </div>
      </section>
    )
}

export default Contact
