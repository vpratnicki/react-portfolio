import React, { useState } from 'react';
import Nav from '../Nav';
import About from '../About';
import Projects from '../Projects';
import Footer from '../Footer';

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = ('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        } 
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Contact />;
    };
    
    const handlePageChange = (page) => {
        document.title = page;
        setCurrentPage(page)
    }

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}

export default PortfolioContainer;
