import React from 'react'
import { useForm, Controller } from 'react-hook-form';
 import TextInput from '../../../Shared/Text/TextInput';
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

 import { zodResolver } from "@hookform/resolvers/zod"
 import * as z from "zod"

 const formSchema = z.object({
   startdate: z.string().min(7, {
     message: "must be at least 7 characters.",
   }),
    
   enddate: z.string().min(7, {
     message: "must be at least 7 characters.",
   }),
   destination: z.string().min(7, {
     message: "must be at least 7 characters.",
   }),
   length: z.string().min(7, {
      message: "must be at least 7 characters.",
    }),
    business: z.string().min(7, {
      message: "must be at least 7 characters.",
    }),
  
 
 })




export default function AddHistory() {



   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        startdate: "",
        enddate:"",
        destination:" ",
        length:"",
        business:"",

      },
    })

  return (
    <>
       <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6  mt-5 ">
             <FormField
          control={form.control}
          name="startdate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-3 font-normal">From (YYYY/MM)</FormLabel>
              <FormControl>
                <Input placeholder="Example:2022/21" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
         </div>
          <div className="col-xl-4  col-lg-6 col-md-4 col-sm-6 mt-5 ">
             
            <FormField
          control={form.control}
          name="enddate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-3 font-normal">To (YYYY/MM)</FormLabel>
              <FormControl>
                <Input placeholder="Example:2022/21" {...field} />
              </FormControl>
            </FormItem>
          )}
        />



          </div>
          <div className="col-xl-4  col-lg-6 col-md-4 col-sm-6  mt-5 ">
             
               <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-3 font-normal">Destination (City,Country)</FormLabel>
              <FormControl>
                <Input placeholder="Example:New York, USA" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

            

           </div>
           <div className="col-xl-4  col-lg-6 col-md-4 col-sm-6  mt-5 ">
           
        <FormField
          control={form.control}
          name="length"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-3 font-normal">Length (for example:6 days)</FormLabel>
              <FormControl>
                <Input placeholder="Example:6 days" {...field} />
              </FormControl>
            </FormItem>
          )}
        />


          </div>
          <div className="col-xl-4  col-lg-6 col-md-4 col-sm-6  mt-5 ">
          
          <FormField
          control={form.control}
          name="business"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mb-3 font-normal">Purpose (for example business)</FormLabel>
              <FormControl>
                <Input placeholder="Example: Business" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

          </div>
       </div>    
    </>
  )
}
