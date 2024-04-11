import React from 'react';
import img1 from './images/logo.jpg';
function NavBar() {
  return (   
      <nav className="navbar">
        <ul className="navigation">
          <li>
            <img src={img1} alt="loading" class="logo-class"/>
          </li>
          <li  id="item1"><span>R</span>oam Ready</li>
          <li className="item" id="item2">Home</li>
          <li className="item" id="item3">Guide</li>
          <li className="item" id="item4">Features</li>
          <li className="item" id="item5">Places</li>
          <li><input className="search-class" type="search" placeholder="Search Destination" aria-label="Search" /></li>
         <li><button className='button-class' id='btw1'>Login</button></li>
          <li><button className='button-class' id="btw2">Sign Up</button></li>
        </ul>
      </nav>
  );
}

export default NavBar;
