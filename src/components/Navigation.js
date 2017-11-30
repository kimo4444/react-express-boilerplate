import React from 'react';
import FontAwesome from 'react-fontawesome';
import Contact from './Contact';
import {Link} from 'react-router-dom';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaVimeo from 'react-icons/lib/fa/vimeo';



const Navigation =(props) => {

  return (
      <nav>
        <ul className = 'nav'>
          <li id = 'logo'><Link to = '/'>jay kim</Link></li>
          <li>
            <Link to ='/'>/photography/</Link>
          </li>
          <li>
            <Link to ='/Film'>/film/</Link>
          </li>
          <li>
            <Link to ='/contact/'>/contact/</Link>
          </li>
          <li>
            <a href = 'https://www.instagram.com/jaykimfilm/?hl=en'>
              <FaInstagram />
            </a>
            <a href = 'https://www.instagram.com/jaykimfilm/?hl=en'>
              <FaVimeo />
            </a>
          </li>


        </ul>

      </nav>
    )

}

export default Navigation;
