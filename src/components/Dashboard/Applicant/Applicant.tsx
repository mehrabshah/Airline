import React, { useState } from "react";
import AddHistory from "../AddHistory/AddHistory";
import { Button } from "../../../@/components/ui/button"
import { Toast } from "../../../@/components/ui/toast"
import { Checkbox } from "../../../@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "../../../@/components/ui/radio-group"
 
const Applicant = () => {


  const [count, setcount] = useState(false); // Default state is set to false
  const [travelBefore, setTravelBefore] = useState(false); // Default state is set to false
  const handleCheckboxChangeyes = (event:any) => {
    console.log(event)
    if(event === "no"){
      setTravelBefore(false)
      setComponents([]);
      setcount(false)
    }
    if(event==="yes"){
  setTravelBefore(true)
      if(!count){
        handleAddComponent()
        setcount(true)
      }
    }
  }
  const result: any[] = [];
   const [components, setComponents] = useState(result);
   const handleAddComponent = () => {

    setComponents([...components, <AddHistory/>]);
   
   };
   const handleRemoveComponent = () => {

    const updatedComponents = [...components];
    if (updatedComponents.length > 0) {
      updatedComponents.pop();

      setComponents(updatedComponents);
    }
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
        
        <div className="d-flex flex-column">
          <div className="mb-2">
        <p>Did not travel Before</p>
          </div>
        <div className="d-flex mb-2">
        <RadioGroup
                  onValueChange={handleCheckboxChangeyes}
                  className="flex flex-col space-y-1"
                >
                  <div>
                      <RadioGroupItem value="yes" className="me-2"/>
                     Yes
                  </div>
                  <div>
                      <RadioGroupItem value="no" className="me-2"/>
                     No
                  </div>
                      </RadioGroup>
        </div>
    
        </div>
    

    {components.map((Component, index) => (
      <div key={index} className="mt-0 mb-5">
          {Component}
        </div>
      ))} 
<div className="w-100 d-flex justify-content-between">

      {travelBefore && (
        <Button type="button" onClick={handleAddComponent} className="mr-16">
            Add Travel History
          </Button>
        )}
      {components.length>0 && (
        <Button type="button" onClick={handleRemoveComponent} className="mr-16">
            Remove Travel History
          </Button>
        )}
        </div>


    </div>
  );
};
export default Applicant;
