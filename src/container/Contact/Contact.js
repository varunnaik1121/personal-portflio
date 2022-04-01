import React, { useState } from "react";
import "./Contact.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from "../../Wrapper/AppWrap";
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = contact;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    <div
      className="app__container-bg-normal"
      
    >
      <div className="app__flex margin-min">
        <h1 className="app__links-bold-text">&lt; Contact Me &gt; </h1>
      </div>
      <div className="app__contact-header">
        <h1 className="app__header-text-bold">Take a Cofee & chat with me.</h1>
      </div>
      <div className="app__contact-wrapper">
        <div className="contact-wrapper">
          <img src={images.email} alt="email"></img>
          <div className="links">
            <a href="mailto:varunnaik1121@gmail.com" target="_blank">
              Tap To Mail
            </a>
          </div>
        </div>
        <div className="contact-wrapper">
          <img src={images.mobile} alt="phone"></img>
          <div className="links">
            <a href="tel:+91 9380230082">Tap To Call</a>
          </div>
        </div>
      </div>
      <motion.div className="contact-form" whileInView={{ opacity: [0, 1] }}
      animate={{ y: [70, 0] }}
      transition={{ duration: 0.4 }}>
        <h2 className="app__header-text-bold">Contact Us</h2>

        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            value={name}
            placeholder="Your Name"
            name="name"
            onChange={handleChange}
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
        <button type="button" className="btn">
          Send Message
        </button>
      </motion.div>
      <div>
        <h2 className="app__links-bold-text border normal">Follow Me On</h2>
        <div className="links-section">
          <div>
            <a
              href="https://github.com/varunnaik1121/varunnaik1121/blob/main/README.md"
              target="_blank"
            >
              <AiOutlineGithub />
            </a>

            <h5>Github</h5>
          </div>
          <div>
            <a href="https://www.instagram.com/varunnaik62/" target="_blank">
              <BsInstagram />
            </a>

            <h5>Instagram</h5>
          </div>
          <div>
            <a href="mailto:varunnaik1121@gmail.com" target="_blank">
              <AiOutlineMail />
            </a>

            <h5>Mail</h5>
          </div>
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

export default AppWrap(Contact,"Contact");
