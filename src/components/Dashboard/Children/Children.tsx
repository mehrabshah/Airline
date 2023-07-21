import React, { useState } from "react";
import AddHistory from "../AddHistory/AddHistory";
import { Button } from "../../../@/components/ui/button"
import { Toast } from "../../../@/components/ui/toast"
import { Checkbox } from "../../../@/components/ui/checkbox"


 
const Children = () => {
  const [haveTraveled, setHaveTraveled] = useState(false);


  // const handleDropdownChange = (value:any) => {
    
  //   console.log("mehrab")

  //   setHaveTraveled(value === 'yes');
  // };
  
  const result: any[] = [];
   const [components, setComponents] = useState(result);
   const handleAddComponent = () => {

    setComponents([...components, <AddHistory/>]);
   

   };
    
 
  return (
    <div className="Applicant-inner   pb-5 "  style={{paddingTop:"4rem"}}>
       
       {/* <div className="flex items-center space-x-2">
      <Checkbox id="terms"  onChange={handleDropdownChange}/>
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Have you Travelled Before
      </label>
    </div> */}
        



    
      <Button type="button"  onClick={handleAddComponent} className="mr-16">Add Travel History</Button> 
    

    {components.map((Component, index) => (
        <div key={index} className="mt-4">
          {Component}
        </div>
      ))} 

    </div>
  );
};
export default Children;
