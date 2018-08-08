import React from 'react';
import Project from '../fixtures/projects.js';
import {Link} from 'react-router-dom';


const RecentWork  = () =>  {
    return (
          <div className = 'recent-project'>
              <div className = 'recent-project__description'>
                  <h3>B2BPATTERN</h3>
                
                    b2bPattern is a pattern production company that offers a shopping platform for
                    established apparel brands and startups.

                  <h4>FEATURES:</h4>
                  Shopping cart, Stripe powered checkout, an admin panel for adding, editing, removing inventory.

                  <h4>BUILT WITH:</h4>
                    Node, Express, MongoDB(mongoose), Stripe,  AWS S3,
                    AWS EBS.
                  <a href = "http://b2bpattern.com" className = "button" target="_blank" rel="noopener">VIEW LIVE</a>

                  </div>
                  <img className = 'recent-project__img' src = {require('../images/monitors.jpg')} alt = "recent project"/>
          </div>


    )

}

export default RecentWork;
