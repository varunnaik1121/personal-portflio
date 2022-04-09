import React, { useState } from "react";
import "./Contact.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from "../../Wrapper/AppWrap";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { linksData } from "./linksData";
import { client } from "../../client";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = contact;

  const handleChange = (e) => {
    if (!(contact.name && contact.email && contact.message)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleClick = () => {
    if (contact.name && contact.email && contact.message) {
      setLoading(true);
      const contactData = {
        _type: "contact",
        name: contact.name,
        email: contact.email,
        message: contact.message,
      };
      client.create(contactData).then((data) => {
        setLoading(false);
        setIsFormSubmitted(true);
      });
    } else {
      return;
    }
  };

  return (
    <div className="app__container-bg-normal">
      <motion.div
        className="app__flex margin-min"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="app__links-bold-text">&lt; Contact Me &gt; </h1>
      </motion.div>
      <div className="app__contact-header">
        <h1 className="app__header-text-bold">Take a Cofee & chat with me.</h1>
      </div>
      <div className="app__contact-wrapper">
        <div className="contact-wrapper">
          <img src={images.email} alt="email"></img>
          <div className="links">
            <a
              href="mailto:varunnaik1121@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Mail Me
            </a>
          </div>
        </div>
        <div className="contact-wrapper">
          <img src={images.mobile} alt="phone"></img>
          <div className="links">
            <a href="tel:9380230082">Contact Me</a>
          </div>
        </div>
      </div>
      {isFormSubmitted ? (
        <h2 className="sent-message-text">
          <span>T</span>hanks For Being In Touch With Me 💞...
        </h2>
      ) : (
        <motion.div
          className="contact-form"
          whileInView={{ opacity: [0, 1] }}
          animate={{ y: [70, 0] }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="app__header-text-bold">Contact Us</h2>

          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              value={name}
              placeholder="Your Name"
              name="name"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              value={email}
              placeholder="Your Email"
              name="email"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              onChange={handleChange}
              name="message"
            />
          </div>
          <button disabled={disabled} className="btn" onClick={handleClick}>
            {loading ? "sending..." : "send message"}
          </button>
        </motion.div>
      )}
      <div>
        <h2 className="app__links-bold-text border normal">Let's Talk</h2>
        <div className="links-section">
          {linksData.map((item) => {
            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                key={item.name}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className={item.name}
                >
                  <img
                    src={item.icon}
                    alt="link-icon"
                    className="icon-image"
                  ></img>
                </a>

                <h5>{item.name}</h5>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="copyright">
        <p>
          <AiOutlineCopyrightCircle />
          2022 Varun INDIA, Inc All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AppWrap(Contact, "Contact");
