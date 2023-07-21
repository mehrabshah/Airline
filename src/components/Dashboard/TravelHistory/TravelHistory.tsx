import { Button } from "../../../@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"


import { Input } from "../../../@/components/ui/input"
import { Label } from "../../../@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../@/components/ui/tabs"
import Applicant from "../Applicant/Applicant"
import Children from "../Children/Children"
import Spouse from "../Spouse/Spouse"

export function TravelHistory() {
  return (
    <Tabs defaultValue="account" >
      <TabsList className="grid  grid-cols-3 w-[400px] fixed">
        <TabsTrigger value="account">Applicant</TabsTrigger>
        <TabsTrigger value="password">Spouse</TabsTrigger>
        <TabsTrigger value="email">Children</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Applicant/>
       
      </TabsContent>
      <TabsContent value="password">

       <Spouse/>
       
      </TabsContent>
      <TabsContent value="email">

        <Children/>
       
      </TabsContent>

    </Tabs>
  )
}
