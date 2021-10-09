import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="fixed flex flex-wrap items-center justify-between px-2 py-3 mb-3 ">
  <div className="container px-4 mx-auto flex flex-wrap items-center bg-gray-900 z-50 justify-between">
      <p className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
        James Poulin
      </p> 
    <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
      <ul className="flex flex-col lg:flex-row list-none ml-auto">
          <li className="nav-item">
            <Link 
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" 
              to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" 
              to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" 
              to="/skills">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" 
              to="/contact">
              Contact Me
            </Link>
          </li>
          <li className="nav-item">
            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="https://docs.google.com/document/d/e/2PACX-1vS6_eKwDUhjV7HvjRFBhsqAxu6aCWSf6F6gVvv1aWNH9CjIBmtPajhyFOh6E3nNpw/pub" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar
