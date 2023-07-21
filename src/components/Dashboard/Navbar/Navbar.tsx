
// import data from "./Navbar.json";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Navbar.css";
import {navbarItems } from './NavbarData'; 

export default function Navbar() {
   
  const [activeItem, setActiveItem] = useState(2); // Active item state
  const handleItemClick = (itemId: number) => {
    setActiveItem(itemId);
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ps-4 pt-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
             <img src="./images/Navbar/arrow.png"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header d-flex justify-content-end">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        
          <ul className="offcanvas-body ">
            {navbarItems.map((item: any) => (
              <li key={item.id}  className={`sidebar-inner-item ${activeItem === item.id ? 'active' : ''}`}      onClick={() => handleItemClick(item.id)}>
                <a href={item.href}>
                 
                <FontAwesomeIcon icon={item.icon} className='icons ps-3' />
                  <span className="ms-3">{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
      </div>
    </>
  );
}
