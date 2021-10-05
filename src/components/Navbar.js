import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
export const Navbar = () => {
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-dark">
 <div className="container">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color:'#fff'}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link text-white active" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">Experience</a>
      </li> 
      <li className="nav-item">
        <a className="nav-link "  href="#"><div className="contact">Contact Me</div></a>
      </li>
     
      </ul>
  
   
  </div></div>
</nav> 
        </div>
    )
}
