import React, { Component } from 'react';
import MinNavigation from './MinNavigation';
import Footer from './Footer';



const Contact = (props) => {

  return (
    <div className = 'landing-page'>
        <MinNavigation/>
        <div className = 'about-section'>
            <p>
                I believe user-centered development is everything and
                strive to build user-friendly
                interfaces while maintaining semantic, clean markup
                and SEO friendly code.
            </p>
            <p>
                I build web applications ranging from simple agency landing pages
                and single page applications to CRUD based websites.
            </p>
            <h4>Technologies</h4>
            <ul>
              <li>Languages: Javascript(ES6), HTML5, CSS3 & SCSS, Python;</li>
              <li>Libraries and Frameworks: React.js, Node.js, Express.js;</li>
              <li>Database: SQL, Firebase, MongoDB(mongoose);</li>
              <li>Misc: Git & GitHub, RESTful Architectures;</li>
              <li>Testing: Jest;</li>
              <li>Data Science Tools: Spark, Tableua, Matplotlib;</li>


            </ul>
        </div>
        <Footer />
    </div>

    )

}

export default Contact;
