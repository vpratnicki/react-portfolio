import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import coffee from "../../assets/images/coffee.jpg";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

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
      <div className="lets-connect">
        <div>
          <h2>Let's Connect</h2>
          <p>I'd love to share more about my experiences and projects. I'd also love to chat about all topics related to cats, coffee and code.

Feel free to reach out by email at <a href='mailto:vanessa@pratnicki.net'>vanessa@pratnicki.net</a>, find me on social or drop a message below.</p><br/>
        </div>
        <div className="connect">
        <div className="lets-connect-img">
          <img
            src={coffee}
            alt="close up of coffee with foam that looks like a smile"
            height="230px"
          />
        </div>

        <div>
          <form
            className="form"
            id="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                defaultValue={name}
                onBlur={handleChange}
                name="name"
                className="mx-1 my-2"
              />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                defaultValue={email}
                name="email"
                onBlur={handleChange}
                className="mx-1 my-2"
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
            <button type="submit">Submit</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
