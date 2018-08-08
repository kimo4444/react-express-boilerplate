import React, { Component } from 'react';
import MinNavigation from './MinNavigation';
import Footer from './Footer';
import {Link} from 'react-router-dom';



const Contact = (props) => {

  return (
    <div className = 'landing-page'>
    <MinNavigation />
      <div className = 'contact-form'>
      <h2 className= 'title--contact'>Got some project or have a question? Send me an email!</h2>
        <form method = "POST" action="/send">

          <input type="text" name="name" placeholder="Your name.." required/>

          <input type="email" name="email" placeholder="Your email.." required/>

          <textarea  name="message" placeholder="How can I help you?" required></textarea>
          <input type="submit" value="Submit" className = 'button button--submit'/>
        </form>
      </div>
      <Footer />
      </div>
    )

}

export default Contact;
