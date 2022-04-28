import "./ContactCSS.css";

import {  FaTwitter, FaInstagram } from 'react-icons/fa';
import {  MdEmail, MdCall, MdFacebook } from 'react-icons/md';
import { IconContext } from "react-icons";

import Button from "./Button"

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container cards">
        
        <div className="left">
            <h4>GET IN TOUCH</h4>
            <h1>Contact</h1>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore id sequi aliquid. Ducimus a, commodi quidem ratione eveniet sit accusantium quis. Quod nulla facere ipsum.</p>
            <div className="flex">
            <IconContext.Provider value={{ style: {fontSize: "2rem", color: "#66f" } }}>
            
            <span><MdCall/></span>
            </IconContext.Provider>
                    <div className="col">
                    <p>Say Hi!</p>
                    <h2>mail@example.com</h2>
                    
                </div>
            </div>
            <div className="flex">
            <IconContext.Provider value={{ style: {fontSize: "2rem", color: "#66f" } }}>
            <span><MdEmail/></span>
            </IconContext.Provider>
            <div className="col">
                    <p>LET'S TALK</p>
                    <h2>123 456 78 90</h2>
                </div>
                
            </div>
            <div className="social">
                <p>stay connected</p>
                <IconContext.Provider value={{ className: "myIcon",  }}>

                <div className="link">
                <a href='#Facebook'><MdFacebook/></a>
                <a href='#nstagram'><FaInstagram/></a>
                <a href='#witter'><FaTwitter/></a>
                </div>
                </IconContext.Provider>
                
            </div>
        </div>

        <div className="right">
            <h2>Send A Message</h2>
          <form action="/">
            <label htmlFor="name">Name</label>
            <div id="container">
            <input type="text" name="Fname" placeholder="First"/>
            <input type="text" name="Lname" placeholder="Last"/>
            </div>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="Subject" />

            <label htmlFor="email" name="email">Email</label>
            <input type="text" name="email" />

            <label htmlFor="message" name="message">Message</label>
            <textarea
              name="message"
              cols="30"
              rows="5"
            ></textarea>
            <Button className="primary" name="Send Message" />
          </form>
          </div>

        </div>
      </div>
  );
};

export default Contact;
