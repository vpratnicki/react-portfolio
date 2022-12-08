import React from "react";
import github from '../../assets/images/github2.png';
import facebook from '../../assets/images/Fb.svg';
import linkedIn from '../../assets/images/linkedin.png';
import instagram from '../../assets/images/instagram.svg';

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://github.com/vpratnicki" target="_blank" rel="noreferrer">
          <img
            src={github}
            alt="GitHub logo"
            height="50px"
          />
        </a>
        <a href="https://www.linkedin.com/in/vanessa-pratnicki-97b03256/" target="_blank" rel="noreferrer">
          <img
            src={linkedIn}
            alt="LinkedIn logo"
            height="50px"
          />
        </a>
        <a href="https://www.instagram.com/catzcoffeecode/" target="_blank" rel="noreferrer">
          <img
            src={instagram}
            alt="Instagram logo"
            height="50px"
          />
        </a>
        <a href="https://www.facebook.com/vanessa.pratnicki" target="_blank" rel="noreferrer">
          <img src={facebook} alt="FaceBook logo" height="50px" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
