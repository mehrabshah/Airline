import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {sidebarItems } from './SidebarData'; 
import "./Sidebar.css";
export default function Sidebar() {
    const [activeItem, setActiveItem] = useState(2); // Active item state
    const handleItemClick = (itemId:number) => {
      setActiveItem(itemId);
    };
  return (
    <>
        <div className="sidebar-inner ">
            {sidebarItems.map((item:any) => (
              <li key={item.id}   className={`sidebar-inner-item ${activeItem === item.id ? 'active' : ''}`}      onClick={() => handleItemClick(item.id)}>
                <a href={item.href}>
                <FontAwesomeIcon icon={item.icon} className='icons ps-3' />
                  <span className="ms-3">{item.title}</span>
                </a>
              </li>
            ))}
        </div> 
    </>
  )
}
