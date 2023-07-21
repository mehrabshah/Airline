import React, { useState } from "react";
import AddHistory from "../AddHistory/AddHistory";
import { Button } from "../../../@/components/ui/button"
import { Toast } from "../../../@/components/ui/toast"
import { Checkbox } from "../../../@/components/ui/checkbox"


 
const Applicant = () => {
  const [haveTraveled, setHaveTraveled] = useState(false);


   const handleDropdownChange = (value:any) => {
    
   
  
  };
  
  const result: any[] = [];
   const [components, setComponents] = useState(result);
   const handleAddComponent = () => {

    setComponents([...components, <AddHistory/>]);
   

   };
    
 
  return (
    <div className="Applicant-inner   pb-5 "  style={{paddingTop:"4rem"}}>
       
       
       
        
       


    
      <Button type="button"  onClick={handleAddComponent} className="mr-16">Add Travel History</Button> 
    

    {components.map((Component, index) => (
        <div key={index} className="mt-4">
          {Component}
        </div>
      ))} 

    </div>
  );
};
export default Applicant;
