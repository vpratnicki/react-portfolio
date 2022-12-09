import React from "react";

function Nav({ currentPage, handlePageChange }) {
  const pages = ['About', 'Projects', 'Resume', 'Contact'];

  return (
    <header>
      <h1>Vanessa Pratnicki</h1>
      <nav>
        <ul>
        {
        pages.map((page) => (
            <li key={page}>
              <a
              herf={ `#${page}`}
              onClick={ () => handlePageChange(page) }
              className={ currentPage === page ? 'nav-link active' : 'nav-link '}
              >
                {page}
              </a>
            </li>
          ))
        }
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
