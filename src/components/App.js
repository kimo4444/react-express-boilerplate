import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import Gallery from './Gallery';
import PhotoshootPage from './PhotoshootPage';
import Film from './Film';
import Contact from './Contact';
import {Route, BrowserRouter} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';


export default class App extends React.Component{


  render(){

    return(
      <div>
        <BrowserRouter>
        <div>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
          >

              <Route path = '/' component = {Gallery} exact = {true}/>

              <Route path = '/film' component = {Film}/>
              <Route path = '/contact' component = {Contact}/>
           </AnimatedSwitch>
           <Route path = '/photoshoot/:shoot' component = {PhotoshootPage}/>
           </div>
        </BrowserRouter>
      </div>
    )
  }
}
