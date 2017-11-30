import React, { Component } from 'react';
import pictureSource from '../fixtures/pictures.js';
import Navigation from './Navigation';
import LazyLoad from 'react-lazyload';
import {NavLink} from 'react-router-dom';
import PhotoshootPage from './PhotoshootPage';

export default class Gallery extends Component{

  render(){

    return (
      <div className = 'page-transition'>
          <Navigation />
            <LazyLoad height = {200}>
            <div className= 'gallery'>
              {pictureSource.map(shoot => { return(
                <NavLink to = {`/photoshoot/${shoot.description}`} key = {shoot.description}>
                  <div className = 'imgTile'>
                    <img src = {shoot.source[0]} alt = {shoot.description} />
                    <p className = 'description'>[{shoot.description}]</p>
                  </div>
                </NavLink>
              )})}
                </div>
              </LazyLoad>
        </div>


  )
}
}
