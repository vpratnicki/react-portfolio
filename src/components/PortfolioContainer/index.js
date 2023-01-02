import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "../Nav";
import About from "../About";
import Projects from "../Projects";
import Resume from "../Resume";
import Contact from "../Contact";
import Footer from "../Footer";

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

//   const renderPage = () => {
//     if (currentPage === "About") {
//       return <About />;
//     }
//     if (currentPage === "Projects") {
//       return <Projects />;
//     }
//     if (currentPage === "Resume") {
//       return <Resume />;
//     }
//     return <Contact />;
//   };

  const handlePageChange = (page) => {
    document.title = page;
    setCurrentPage(page);
  };

  return (
    <div>
      <Router>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        <Routes>
          <Route path="react-portfolio/" element={<About />} />
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
      {/* {renderPage()} */}
      <Footer />
    </div>
  );
}

export default PortfolioContainer;
