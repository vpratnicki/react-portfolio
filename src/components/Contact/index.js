import React, { useState, useRef } from "react";
import { validateEmail } from "../../utils/helpers";
// import coffee from "../../assets/images/coffee.jpg";
import {MdOutlineMailOutline} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);

    emailjs.sendForm('service_kuvl0v9', 'template_tuusumm', form.current, 'U7s3svmwfRFyJY8ZD')
    e.target.reset();
      
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Let's Connect</h2>
      <p>I'd love to share more about my experiences and projects. I'd also love to chat about all topics related to cats, coffee and code.
        Reach out by email, find me on social or drop a message below.</p><br/>
        
      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <MdOutlineMailOutline className="contact__option-icon" />
              <h4>Email</h4>
              <h5>vanessa@pratnicki.net</h5>
              <a href='mailto:vanessa@pratnicki.net'>Send a message</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>Vanessa Pratnicki</h5>
              <a href='https://m.me/vanessa.pratnicki' target="_blank" rel="noreferrer">Send a message</a>
            </article>
          </div>
          {/* <img src={coffee} alt="close up of coffee with foam that looks like a smile" height="230px" /> */}
        
          <form ref={form} className="form" onSubmit={handleSubmit} >
            <div className="form-group">
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                defaultValue={name}
                onBlur={handleChange}
                name="name"
                className="my-2"
              />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                defaultValue={email}
                name="email"
                onBlur={handleChange}
                className="my-2"
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label><br/>
              <textarea
                name="message"
                defaultValue={message}
                onBlur={handleChange}
                rows="5"
                
              />
            </div>
            {errorMessage && (
              <div>
                <p>{errorMessage}</p>
              </div>
            )}
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
      </div>
    </section>
  );
}

export default Contact;
