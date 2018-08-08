import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';


export default class MinNavigation extends React.Component  {
  state = {
    isMenuOpen:false
  }
  onMenuOpen = () => {
    this.setState((prevState) => ({isMenuOpen:!prevState.isMenuOpen}));

  }


  render(){
    var menuClass = classNames({
      'menu-open': this.state.isMenuOpen,
      'menu-icon': true
    });
    var overlayClass = classNames({
      'menu__overlay': this.state.isMenuOpen,
    });
    var slideClass= classNames ({
      'menu__items': this.state.isMenuOpen
    });

  return (

      <div className = 'nav--min' >
        <div className={menuClass} onClick = {this.onMenuOpen} >
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>
        <div className={overlayClass}>
          <div className = 'menu__items'>
            <Link className = 'menu__item' to = '/'>HOME</Link>
            <Link className = 'menu__item' to = '/about'>ABOUT</Link>
            <Link className = 'menu__item' to = '/contact'>CONTACT</Link>
          </div>
        </div>
        </div>
    )
}
}
