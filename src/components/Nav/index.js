import React from "react";
import { Link } from "react-router-dom";

function Nav({ currentPage, handlePageChange }) {
  // const pages = ['About', 'Projects', 'Resume', 'Contact'];

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vanessa Pratnicki</h1>
        <h5 className="text-light">
          Fullstack Developer | Web Content Manager
        </h5>
        <nav>
          <ul>
            <li>
              <Link
                herf="#about"
                to="react-portfolio/"
                onClick={() => handlePageChange("About")}
                className={currentPage === "About" ? "navActive" : "nav-link"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                herf="#projects"
                to="react-portfolio/projects"
                onClick={() => handlePageChange("Projects")}
                className={
                  currentPage === "Projects" ? "navActive" : "nav-link"
                }
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                herf="#resume"
                to="react-portfolio/resume"
                onClick={() => handlePageChange("Resume")}
                className={currentPage === "Resume" ? "navActive" : "nav-link"}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                herf="#contact"
                to="react-portfolio/contact"
                onClick={() => handlePageChange("Contact")}
                className={currentPage === "Contact" ? "navActive" : "nav-link"}
              >
                Contact
              </Link>
            </li>
            {/* {
                  pages.map((page) => (
                    <li key={page}>
                    <Link
                    herf={`#${page}`}
                    to={`${page}`}
                    onClick={() => handlePageChange(page)}
                    className={ currentPage === page ? 'navActive' : 'nav-link'}
                    >
                    {page}
                    </Link>
                    </li>
                    ))
                  } */}
          </ul>
        </nav>
        
      </div>
    </header>
  );
}

export default Nav;
