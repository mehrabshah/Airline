import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../@/components/ui/tabs"
import Applicant from '../Applicant/Applicant'
import Spouse from '../Spouse/Spouse'
import Children from '../Children/Children'


export default function TabsSelect() {
  return (
    <>
       <Tabs defaultValue="account">
  <TabsList className='fixed z-10 sm:block flex justify-center '>
    <TabsTrigger value="applicant">Applicant</TabsTrigger>
    <TabsTrigger value="spouse">Spouse</TabsTrigger>
    <TabsTrigger value="children">Children</TabsTrigger>
  </TabsList>
  <TabsContent value="applicant" ><Applicant /></TabsContent>
  <TabsContent value="spouse"><Spouse/></TabsContent>
  <TabsContent value="children"><Children/></TabsContent>
</Tabs>
      
    
    </>
  )
}
