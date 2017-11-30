import React from 'react';
import pictureSource from '../fixtures/pictures.js';
import Navigation from './Navigation';
import {Link} from 'react-router-dom';
import FaColumns from 'react-icons/lib/fa/columns';
import FaTable from 'react-icons/lib/fa/table';





export default class PhotoshootPage extends React.Component{
  state = {
    display:'inline',
    lightbox: false,
    lightboxPic:''
  }
  handleDisplaySelection = (e, text) => {
    e.preventDefault();
     this.setState(()=> {
       if (text==='column') {
       return {
         display: 'inline'
       }
     } else if (text==='table'){
       return {
         display: 'table'
       }

     }

     })
   }

     handleLightbox = (lightboxPic) => {
       this.setState((prevState) => ({
         lightbox:!prevState.lightbox,
         lightboxPic
       }))
     console.log(lightboxPic)
     }
     onLightboxClose = () => {
       this.setState(() => ({
         lightbox:false
       }))
     }


  render(){
    const photoshoot = this.props.match.params.shoot;
    const photoshootToShow = pictureSource.filter(picture => {
      return picture.description === photoshoot})
    return (
      <div className = 'main '>
      <div className = {this.state.lightbox === true ? 'lightbox active' : 'lightbox'} onClick = {() => this.onLightboxClose()}>
        <div>
          <img className ='lightboxPic' src = {`/${this.state.lightboxPic}`} /></div>
      </div>
        <Navigation />

          <div className = 'display-icon'>
            <a href ='' className = 'icon' onClick = {((e, display) => this.handleDisplaySelection(e, 'column'))}><FaColumns /></a>
            <a href ='' className = 'icon' onClick = {((e, display) => this.handleDisplaySelection(e, 'table'))}><FaTable /></a>
          </div>
          <div className = {this.state.display==='inline' ? 'photoshoot' : 'table'} id = 'h'>
       {photoshootToShow[0].source.map(picture => {
         return(<img src = {`/${picture}`} key = {picture} onClick = {() => this.handleLightbox(picture)}/>)
       })}

      </div>
      </div>

  )
}
}
