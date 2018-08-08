import React, { Component } from 'react';
import MinNavigation from './MinNavigation';
import Footer from './Footer';
import Source from '../fixtures/projects.js';



const ProjectPage = (props) => {
  const projectTitle = props.match.params.project;
  console.log(projectTitle)
  const project = Source.filter(pr => {
      return (pr.title === projectTitle)})


  return (
    <div className = 'landing-page'>
      <MinNavigation />
      <div className = 'project'>

        <div className = 'project__description'>
          <h1>{project[0].title}</h1>
          {project[0].description}
          <h4>Features:</h4>
          {project[0].features}
          <h4>Built with:</h4>
          <span>{project[0].technologies}</span>
        </div>
          <img src = {`/${project[0].source}`} className = 'project__img'/>

      </div>
      <Footer />
      </div>
    )

}

export default ProjectPage;
