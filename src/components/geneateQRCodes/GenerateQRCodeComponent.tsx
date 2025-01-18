"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { useToast,toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import React, { useState } from 'react'
import ComboBoxComponentCommittees from '../form-components/ComboBoxCommitteesComponent'
import { Label } from "@/components/ui/label"
import {Card,CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from "@/components/ui/card"
import { ToastAction } from "@radix-ui/react-toast"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import ComboBoxComponentDepartment from "../form-components/ComboBoxDepartmentsComponent"
import ComboBoxComponentUnits from "../form-components/ComboBoxUnitsComponent"
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store"
import { UserPayload } from "@/utiles/types/UserPayload"
import { generateQRCodesPost } from "@/store/slices/generateQRCodeSlice"


const formSchema = z.object({
  
    empNo: z.string().min(2, {
      message: "يجب ادخال رقم الحاسبة",
    }),
   

  })


const GenerateQRCodeComponent = () => {

    const dispatch = useDispatch<AppDispatch>();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          empNo: "10"
        },
      })


    const [selectedCommittee, setSelectedCommittee] = useState<string | undefined>(undefined);
    const [selectedDepartment, setSelectedDepartment] = useState<string | undefined>(undefined);
    const [selectedUnit, setSelectedUnit] = useState<string | undefined>();

    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        const formData = new FormData();

        formData.append("committee", selectedCommittee!);
        formData.append("department", selectedDepartment!);
        formData.append("unit", selectedUnit!);

       // console.log("formData",formData.get("committee"));
       
       dispatch(generateQRCodesPost(formData))
      .unwrap()
      .then((response) => {
        toast({
          className: cn(
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
          ),
          title: "اضافة بيانات",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">تم اضافة البيانات بنجاح</code>
            </pre>
          ),
        });
      })
      .catch((error) => {
        toast({
          className: cn(
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
          ),
          title: "خطأ",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                حدث خطأ اثناء عملية الاضافة: {error}
              </code>
            </pre>
          ),
        });
      });
  

      



    }

    return(

<Form {...form}>
      <form noValidate onSubmit={form.handleSubmit(onSubmit)}  className="space-y-1 text-right">
    
    <Card className=" w-[1200px] h-[650px] min-h-screen">
    <CardHeader>
      {/* <CardTitle className="text-3xl font-extrabold text-center ">الاضافة</CardTitle> */}
      <CardDescription className="text-2xl font-extrabold text-center ">صفحة انشاء رمز الاستجابة </CardDescription>
    </CardHeader>
    <CardContent>

 <div className="flex gap-3 flex-row-reverse  items-center ">

 <ComboBoxComponentCommittees
        valueType={selectedCommittee}
        onChange={(value) => {
          setSelectedCommittee(value);
          setSelectedDepartment(undefined); // Reset department selection
        }}
        fetchUrl="http://localhost:3000/api/architecture/committees"
      />

      {/* Department ComboBox */}
      {selectedCommittee && (
        <ComboBoxComponentDepartment
          valueType={selectedDepartment}
          onChange={setSelectedDepartment}
          fetchUrl={`http://localhost:3000/api/architecture/committees/${selectedCommittee}`}
        />
      )}

{selectedDepartment && (
  <ComboBoxComponentUnits
    valueType={selectedUnit}
    onChange={setSelectedUnit}
    fetchUrl={`http://localhost:3000/api/architecture/committees/${selectedCommittee}/${selectedDepartment}`}
  />
)}




 </div>


 
 <Separator className="my-4" />
   <div className="flex justify-end">
    
<div className=" flex justify-center    w-[200px] ">

    
<FormField

          control={form.control}
          name="empNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl font-bold text-blue-500">رقم الحاسبة</FormLabel>
              <FormControl>
                <Input placeholder="رقم الحاسبة" className="font-extrabold text-lg " {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage className="text-2xl font-bold text-red-600" />
            </FormItem>
          )}
        />


 
</div>
   </div>
   
    

    

 

    </CardContent>
      <CardFooter className="flex ">
       
        <Button  className="font-extrabold text-lg m-auto" type="submit">توليد رمز الاستجابة</Button>

      </CardFooter>
    </Card>

    

    </form>
    </Form>

    )


}

export default GenerateQRCodeComponent