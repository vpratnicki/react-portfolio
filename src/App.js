import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  // const renderPage = () => {
  //   if (currentPage === "About") {
  //     return <About />;
  //   }
  //   if (currentPage === "Projects") {
  //     return <Projects />;
  //   }
  //   if (currentPage === "Resume") {
  //     return <Resume />;
  //   }
  //   return <Contact />;
  // };

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
          <Route path="react-portfolio/projects" element={<Projects />} />
          <Route path="react-portfolio/resume" element={<Resume />} />
          <Route path="react-portfolio/contact" element={<Contact />} />
        </Routes>
      </Router>
      
      {/* {renderPage()} */}
      <Footer />
    </div>
  );
}

export default App;
