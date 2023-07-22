import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import { Link } from 'react-router-dom'
import {Context} from "../context/Context";
import { useContext } from "react";

import './Navbar.css'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
        <div className='links-container' ref={linksContainerRef}>
          
          <ul className='links' ref={linksRef}>
          <li>
          <Link  to="/">STRONA GŁÓWNA</Link>
          </li>
          <li>
          <Link  to="/write">EMOCJE</Link>
          </li>
          <li>
          <Link  to="/wykres">WYKRESY</Link>
          </li>
          
          
           
            </ul>
        </div>
        <div className="topRight">
          <div  onClick={handleLogout} >
            <ul className="topList">
             <li className="topListItem">
            <Link  > {user &&
             
            "WYLOGUJ "
            
            
            }</Link>
            </li></ul>
            </div> 
        {user ? (
          <Link to="/settings">
            <div>{user.username}</div>
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGOWANIE
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REJESTRACJA
              </Link>
            </li>
          </ul>
        )}
      
      </div>
      </div>
    </nav>
  );
};

export default Navbar;