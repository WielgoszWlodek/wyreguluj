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
      <div className="top">
     
        <div className="topCenter" ref={linksContainerRef}>
          <ul className="topList" ref={linksRef}>
          <li className="topListItem">
          <Link  className="link" to="/">Home</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/wykres">Wykres</Link>
          </li>
          <li className="topListItem">
            <Link className="link"  to="/decyzja">Decyzja</Link>
          </li>
          <li className="topListItem">
            <Link className="link"  to="register" >Register</Link>
            </li>
            <li className="topListItem">
            <Link className="link"  to="/login">Login</Link>
            </li>
            <li className="topListItem" onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;