import React, { Component } from 'react';
import Navigation from './Navigation';
import YouTube from 'react-youtube';
import videoId from '../fixtures/videos.js';


const Film =(props) => {
  const opts = {
        height: '360',
        width: '640',
      };
  return (
      <div className ='page-transition test'>
      <Navigation/>

        <div className = 'film-list'>
        {videoId.map(id => {return (<YouTube
        videoId={id} opts = {opts} key = {id}
        />)})}


        </div>

      </div>
    )

}

export default Film;
