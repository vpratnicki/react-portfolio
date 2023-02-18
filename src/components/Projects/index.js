import React from "react";
import IMG0 from "../../assets/images/portfolio13.png";
import IMG1 from "../../assets/images/portfolio1.png";
import IMG2 from "../../assets/images/portfolio2.png";
import IMG3 from "../../assets/images/portfolio3.png";
import IMG4 from "../../assets/images/portfolio4.png";
import IMG5 from "../../assets/images/portfolio5.png";
import IMG6 from "../../assets/images/portfolio6.png";
import IMG7 from "../../assets/images/portfolio7.png";
import IMG8 from "../../assets/images/portfolio8.png";
import IMG9 from "../../assets/images/portfolio9.png";
import IMG10 from "../../assets/images/portfolio10.png";
import IMG11 from "../../assets/images/portfolio11.png";
import IMG12 from "../../assets/images/portfolio12.png";


function Projects() {
  const data = [
    {
      id: 0,
      image: IMG0,
      title: "Paws and Claws",
      github: "https://github.com/vpratnicki/paws-and-claws",
      demo: "https://paws-and-claws.herokuapp.com/",
    },
    {
      id: 1,
      image: IMG1,
      title: "SQL Challenge: Employee Tracker",
      github: "https://github.com/vpratnicki/Employee-Tracker",
      demo: "https://drive.google.com/file/d/1zH9PfGI2j3R_Z8w3yq_eiFLPD_Goty3S/view",
    },
    {
      id: 2,
      image: IMG2,
      title: "Book Search Engine",
      github: "https://github.com/vpratnicki/book-search-engine",
      demo: "https://shrouded-basin-50525.herokuapp.com/",
    },
    {
      id: 3,
      image: IMG3,
      title: "PWA TextEditor",
      github: "https://github.com/vpratnicki/pwa-text-editor",
      demo: "https://hidden-dusk-64273.herokuapp.com/",
    },
    {
      id: 4,
      image: IMG4,
      title: "Social Network API",
      github: "https://github.com/vpratnicki/social-network-api",
      demo: "https://watch.screencastify.com/v/2E6SHEDN7YY0sq4DB5WZ",
    },
    {
      id: 5,
      image: IMG5,
      title: "Tech Blog",
      github: "https://github.com/vpratnicki/tech-blog",
      demo: "https://safe-citadel-76816.herokuapp.com/",
    },
    {
      id: 6,
      image: IMG6,
      title: "The Cat Shack",
      github: "https://github.com/vpratnicki/the-cat-shack",
      demo: "https://hidden-shelf-86183.herokuapp.com/",
    },
    {
        id: 7,
        image: IMG7,
        title: "e-commerce back end using Object-Relational Mapping",
        github: "https://github.com/vpratnicki/e-commerce-back-end",
        demo: "https://github.com/vpratnicki/e-commerce-back-end#usage",
    },
    {
        id: 8,
        image: IMG8,
        title: "Note Taker",
        github: "https://github.com/vpratnicki/Note-Taker",
        demo: "https://noter-taker-vpratnicki.herokuapp.com/",
    },
    {
        id: 9,
        image: IMG9,
        title: "Team Profile Generator",
        github: "https://github.com/vpratnicki/Team-Profile-Generator",
        demo: "https://watch.screencastify.com/v/xsGPOD9thmWuPDZqt0mG",
    },
    {
        id: 10,
        image: IMG10,
        title: "Keep Calm with Cats",
        github: "https://github.com/vpratnicki/Keep-Calm-with-Cats",
        demo: "https://vpratnicki.github.io/Keep-Calm-with-Cats/",
    },
    {
        id: 11,
        image: IMG11,
        title: "Work Day Scheduler",
        github: "https://github.com/vpratnicki/Work-Day-Scheduler",
        demo: "https://vpratnicki.github.io/Work-Day-Scheduler/",
    },
    {
        id: 12,
        image: IMG12,
        title: "Password Generator",
        github: "https://github.com/vpratnicki/password-generator",
        demo: "https://vpratnicki.github.io/password-generator/",
    }
  ];

  return (
    <section>
          <h5>My Recent Work</h5>
          <h2>Projects</h2>

      <div className="container project__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project__item">
              <div className="project__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project__item-cta">
                <a href={github} target="_blank" rel="noreferrer" className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
