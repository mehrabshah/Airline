import React from 'react'
import './Dashboard.css'; 
import Navbar from "../../components/Dashboard/Navbar/Navbar"
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar'
import Spouse from '../../components/Dashboard/Spouse/Spouse';
import TabsSelect from '../../components/Dashboard/TabsSelect/TabsSelect';


export default function Dashboard() {

  return (
    <>    
        <Navbar /> 
      <div className='Sidebar'>
         <Sidebar />
      </div>
       <div className='Applicant'>
        <div className=' container mt-4 p-0 m-0'>
            <TabsSelect />   
         
         </div>
      </div> 
    </>
  )
}
