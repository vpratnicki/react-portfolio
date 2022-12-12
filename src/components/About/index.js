import React from "react";
import aboutPhoto from '../../assets/images/about-me2.png';

function About() {
  return (
    <div>
    <section className="hero">
      <div className="hero-intro">
        <h1>Cats, Coffee and Code!</h1>
        <p> These are a few of my favorite things!</p>
      </div>
    </section>

    <section>
      <div className="about-section">
        <div className="about-text">
          <h2>About</h2>
          <p> I enjoy making the internet better one page at a time!</p>
        <br/>
        <h3>Background</h3>
        <p>I have over 8 years of experience as a Web Content Manager, where I create and execute effective website
          design, digital writing and editing. I have experience crafting clear, concise messaging; ensuring content is
          current, relevant and conforms to industry best practices, as well as adheres to the Americans with
          Disabilities Act (ADA) Standards for Accessible Design. My communication skills and demonstrated ability to
          develop effective web content has been a great asset.</p>
          <br/>
        <p>
          While I enjoy my career as a Web Content Manager, it is a desire of mine to cross over to the back-end side
          and become a Web Developer! To do this, I have enrolled in the George Washington Coding Boot Camp.
        </p>
        <br/>
        <div className="fun-facts">
        <strong><h4>Fun Facts</h4></strong>
        <ul>
          <li>You will most likely never see me without a coffee, and I always have a dad joke ready to share.</li>
          <li>Cats are my spirit animals, I was a crazy cat lady as early as middle school. Currently I have 3, trying to convince my hubby we need one more!
          </li>
        </ul>
      </div>
        <br/>
        </div>
        <div class="about-container-2">
       <div class="about-img">
        <img src={aboutPhoto}
          alt="Vanessa sitting outside, enjoying coffee and working on her laptop" />
       </div>
      </div>
      </div>
    </section>
    </div>
  );
}

export default About;
