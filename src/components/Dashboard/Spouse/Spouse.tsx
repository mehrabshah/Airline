import React, { useState } from "react";

// import "./Applicant.css";
// import TextInput from "../../../Shared/Text/TextInput";
// import data from "./Applicant.json";
import AddHistory from "../AddHistory/AddHistory";
// const fieldData = data.formFields;
// import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "../../../@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../@/components/ui/form"
import { Input } from "../../../@/components/ui/input"
import { useForm, Controller } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./../../../@/components/ui/select"


import { Toast } from "../../../@/components/ui/toast"

const formSchema = z.object({
  familyname: z.string().min(7, {
    message: "must be at least 7 characters.",
  }),
   
  givenname: z.string().min(7, {
    message: "must be at least 7 characters.",
  }),
  email: z
  .string({
    required_error: "Please select an email to display.",
  })
  .email(),

})

const Spouse = () => {






    const [haveTraveled, setHaveTraveled] = useState(false);
    const handleDropdownChange = (value:any) => {
      setHaveTraveled(value === 'yes');
    };
  

  const result: any[] = [];
   const [components, setComponents] = useState(result);
   const handleAddComponent = () => {

    setComponents([...components, <AddHistory/>]);
    console.log("mehrab")


   };

 
  


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      familyname: "",
      givenname:"",
      // selector:" ",

    },
  })
 

     function onSubmit(values: z.infer<typeof formSchema>) {
      
      
     }
 
  return (
    <div className="Applicant-inner  pb-5"  style={{paddingTop:"4rem"}}>
       
<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  relative">
      <div className="row / mb-2">
      <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 mt-sm-0 mt-5">
        <FormField
          control={form.control}
          name="familyname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-3 font-normal">Family Name:</FormLabel>
              <FormControl>
                <Input placeholder="Enter" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className="col-xl-4  col-lg-6 col-md-4 col-sm-6 mt-sm-0 mt-5">
        <FormField
          control={form.control}
          name="givenname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-3 font-normal">Given Name:</FormLabel>
              <FormControl>
                <Input placeholder="Enter" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       </div>
       <div className="col-xl-4  col-lg-6 mt-xl-0 mt-lg-5 mt-md-0 mt-sm-5 mt-5 col-md-4 col-sm-6 ">
       <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-3 font-normal">Have You Traveled Before</FormLabel>
              <Select onValueChange={handleDropdownChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="No" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                  
                </SelectContent>
              </Select>
              
             
            </FormItem>
          )}
        />
       </div>
       
       {components.map((Component, index) => (
        <div key={index} className="mt-4">
          {Component}
        </div>
      ))} 

        </div>
        <div className="d-flex justify-between mt-5">
        {haveTraveled ?
<Button type="button"  onClick={handleAddComponent} className="mr-16">Add Travel History</Button> : ""
}
         <Button type="submit">Submit</Button>
        </div>
  

      
      </form>
    </Form>
    
    </div>
  );
};
export default Spouse;
