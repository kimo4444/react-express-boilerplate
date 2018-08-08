import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Navigation from './Navigation';
import RecentWork from './RecentWork';
import ProjectTile from './ProjectTile';
import Footer from './Footer';
import Project from '../fixtures/projects.js';
import classNames  from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faReact from '@fortawesome/fontawesome-free-brands/faReact';
import faJs from '@fortawesome/fontawesome-free-brands/faJs';
import faNode from '@fortawesome/fontawesome-free-brands/faNode';
import faPython from '@fortawesome/fontawesome-free-brands/faPython';
import faSass from '@fortawesome/fontawesome-free-brands/faSass';
import faAws from '@fortawesome/fontawesome-free-brands/faAws';
import faDatabase from '@fortawesome/fontawesome-free-solid/faDatabase';



const WorkGallery = () => {
  const skills = [{icon:faReact, title:'React'},
                  {icon:faJs,title:'JS'},
                  {icon:faNode,title:'Node'},
                  {icon:faPython,title:'Python'},
                  {icon:faAws,title:'AWS'},
                  {icon:faGithub,title:'Github'},
                  {icon:faSass,title:'Sass'},
                  {icon:faDatabase,title:'SQL'}
];
    return (
      <div>
      <Navigation />
      <div className = 'landing-page'>
      <h1 className= 'section-title title--recent'>/ RECENT WORK</h1>
          <RecentWork />
          <h1 className= 'section-title'>/ WORK</h1>
          <div className = 'work-overview'>
                <div className ='work-overview__gallery'>
                    {Project.map(img => <ProjectTile img = {img.source} title = {img.title}  icon = {img.icon} desc = {img.description} cl = {img.cl} key = {img.id}/>)}
                </div>
          </div>
            <h1 className= 'section-title'>/ SKILLS</h1>
          <div className = 'skills'>
              {skills.map((skill)=>{
                return (<div className = 'skills__icon' key = {skill.title} ><FontAwesomeIcon icon={skill.icon} size="9x"/><p>{skill.title} </p></div>)
          })}
          <span>EXPRESS.JS</span><span>REDUX</span>
          </div>
          <Footer />
      </div>
      </div>
  )
}
export default WorkGallery;
