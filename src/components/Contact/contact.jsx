import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css"; // Make sure to import the CSS file for styling
import contact from "../Assets/contact-img__1_-removebg-preview.png";

export const ContactForm = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formDetails.email || !validateEmail(formDetails.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    const serviceID = "service_2q0cxbf";
    const templateID = "template_p3qnpqn";
    const userID = "QF9IvZs8mGvhHb1Uj";

    emailjs
      .send(serviceID, templateID, formDetails, userID)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send email. Please try again.");
        }
      );

    setFormDetails({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (

    <div className="contact-form-container">

      <div className="contact2">
        <img src={contact} alt="img" />

        <form onSubmit={handleSubmit}>

          <h2>Contact With Me</h2>
          <div className="input-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formDetails.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formDetails.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-row">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formDetails.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formDetails.phone}
              onChange={handleInputChange}
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={formDetails.message}
            onChange={handleInputChange}
          />
          <button className="button1" type="submit">
            Send
          </button>
        </form>
      </div>
      {error && <p className="error">{error}</p>}
      {status && <p>{status}</p>}
    </div>
  );
};
