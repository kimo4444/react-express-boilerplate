import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'react-fa';
import LazyLoad from 'react-lazy-load';

const ProjectTile = ({img, title, desc, cl, icon})  => {
  return(
    <div className = 'work-overview__tile'>

          {img && <Link to = {`/project/${title}`}><LazyLoad offset={0}>
              <img src = {`/${img}`} alt = {{title}}/>
            </LazyLoad>
          </Link>}

      <div className = {cl ? cl : 'tile__text'}>
        <Icon name={icon} className = 'work-overview__icon'/>
        <h3 className = 'work-overview__header'>{title}</h3>
        <p className = 'work-overview__text'>{desc}</p>
        <Link to = {`/project/${title}`} className = 'project__link'>CASE STUDY</Link>
      </div>
    </div>

  )}

  export default ProjectTile;
