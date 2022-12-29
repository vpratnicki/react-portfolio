import React from "react";
import resume from '../../assets/Resume.pdf';

function Resume() {
  return (
    <div className="about-section">
      
      <div className="about-text">
        <a href={resume} className="btn">Download Resume</a>
        <h2>Resume</h2>
        <h3>Summary</h3>
        I am an experienced web content manager holding a Bachelors of Science
        in Mass Communications. I am currently pursuing an intensive full stack
        web development coding certificate at The George Washington University,
        where I am developing skills in the foundations of web development, such
        as JavaScript, Node.js, Handlebars, SQL, and more, while honing my
        skills in HTML5, CSS and responsive design.
        <br />
        <br />
        As an innovative problem-solver passionate about creating meaningful
        user experiences, my current focus is on leveraging these web
        development skills to create web applications that assist people to make
        their lives easier.
        <br />
        <br />I bring the following to every project:
        <ul>
          <li>
            Strong problem-solving skills and a high level of maturity and
            focus, with the ability to multitask.
          </li>
          <li>
            The ability to work well with project teams, as well as interface
            with clients as needed.
          </li>
          <li>Flexibility, adaptability, humility, and a sense of humor.</li>
          <li>
            Results oriented, strong communication and experience leading and
            collaborating with diverse teams.
          </li>
        </ul>
        <br />I am excited to bring my attention to detail and technical skills
        to a company to grow and become a valuable asset.
        <br />
        <br />
        <div className="column-div">
          <div className="col-1">
            <h3>Browser Based Technologies</h3>
            <ul>
              <li>HTML, CSS</li>
              <li>JavaScript/jQuery</li>
              <li>Responsive Design</li>
              <li>Bootstrap</li>
              <li>Handlebars</li>
              <li>Local Storage, Session Storage, IndexDB</li>
              <li>React.js</li>
              <li>
                Content management systems (CMS):
                <ul>
                  <li>Sitecore</li>
                  <li>WordPress</li>
                </ul>
              </li>
              <li>Google Analytics</li>
              <li>Web/PDF accessibility</li>
              <li>SEO</li>
              <li>User Experience (UX)Design</li>
            </ul>
          </div>
          <div className="col-2">
            <h3>Databases</h3>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
            <h3 className="my-1">Server Side development</h3>
            <ul>
              <li>User Authentication</li>
              <li>Progressive Web Applications (PWAs)</li>
              <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
            </ul>
            <h3 className="my-1">API Interaction</h3>
            <ul>
              <li>API, JSON & AJAX</li>
            </ul>
            <h3 className="my-1">Additional skills/technologies</h3>
            <ul>
              <li>MS Office and the Adobe Creative Suite</li>
              <li>Project management</li>
              <li>Quality assurance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
