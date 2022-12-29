import React from "react";
import aboutPhoto from "../../assets/images/about-me2.png";

function About() {
  return (
    <div>
      <section className="hero">
        <div className="hero-intro">
          <h1>Cats, Coffee and Code!</h1>
          <p>
            All things are possible with a cat on your lap,
            <br /> coffee in your mug and code on your laptop.
          </p>
        </div>
      </section>

      <section>
        <div className="about-section">
          <div>
            <div class="about-img">
              <img
                src={aboutPhoto}
                alt="Vanessa sitting outside, enjoying coffee and working on her laptop"
              />
            </div>
          </div>
          <div className="about-text">
            <h5 className="text-light">Get to Know</h5>
            <h2>About Me</h2>
            <p>
              I am dedicated to staying up to date with the latest trends and
              technologies in website design and committed to bringing
              state-of-the-art web approaches.
            </p>
            <br />
            <h3>Background</h3>

            <p>
              I have over 8 years of experience as a Web Content Manager, where
              I create and execute effective website design, digital writing and
              editing. I have experience crafting clear, concise messaging;
              ensuring content is current, relevant and conforms to industry
              best practices, as well as adheres to the Americans with
              Disabilities Act (ADA) Standards for Accessible Design. My
              communication skills and demonstrated ability to develop effective
              web content has been a great asset.
            </p>
            <br />
            <p>
              While I enjoy my career as a Web Content Manager, it is a desire
              of mine to cross over to the back-end side and become a Web
              Developer! To do this, I have enrolled in the George Washington
              Coding Boot Camp.
            </p>
            <br />
            <div className="fun-facts">
              <strong>
                <h4>Fun Facts</h4>
              </strong>
              <ul>
                <li>
                  You will most likely never see me without a coffee and I
                  always have a dad joke ready to share.
                </li>
                <li>
                  Cats are my spirit animals, I was a crazy cat lady as early as
                  middle school. Currently I have 3, but I think we need one
                  more!
                </li>
                <li>
                  The web has always been a part of my life. As a child, I
                  recall going on photo shoots with my mom for the sites she was
                  building. In high school, I studied interactive media and was
                  a part of the website club that created the first website for
                  our high school.
                </li>
              </ul>
            </div>
            <br />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
