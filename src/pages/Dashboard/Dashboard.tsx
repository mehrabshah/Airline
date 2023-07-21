import React from 'react'
import './Dashboard.css'; 
import Navbar from "../../components/Dashboard/Navbar/Navbar"
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar'
import Spouse from '../../components/Dashboard/Spouse/Spouse';
import { TravelHistory } from '../../components/Dashboard/TravelHistory/TravelHistory';

export default function Dashboard() {
  return (
    <>    
        <Navbar /> 
      <div className='Sidebar'>
         <Sidebar />
      </div>
       <div className='Applicant'>
        <div className=' container mt-4 p-0 m-0'>
            <TravelHistory/>
         
         </div>
      </div> 
    </>
  )
}
