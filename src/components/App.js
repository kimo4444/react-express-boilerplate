import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import WorkGallery from './WorkGallery';
import Contact from './Contact';
import About from './About';
import ProjectPage from './ProjectPage';
import {Route, BrowserRouter} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';



export default class App extends React.Component{


  render(){

    return(
      <div>
        <BrowserRouter>
          <div>
              <Route path = '/' component = {WorkGallery} exact = {true}/>
              <Route path = '/contact' component = {Contact}/>
              <Route path = '/about' component = {About}/>
              <Route path = '/project/:project' component = {ProjectPage}/>
          </div>
        </BrowserRouter>
        </div>
    )
  }
}
