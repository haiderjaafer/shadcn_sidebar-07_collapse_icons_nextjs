"use client"


import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
 
import { useToast,toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import React, { useState } from 'react'
import ComboBoxComponentCommittees from '../form-components/ComboBoxComponentCommittees'
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { ToastAction } from "@radix-ui/react-toast"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import ComboBoxComponentDepartment from "../form-components/DepartmentCombobox"
import ComboBoxComponentUnits from "../form-components/ComboBoxComponentUnits"
import { CreateUserPayload, postUser } from '@/store/slices/userSlice'; // Import your thunk
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store"
import { TestSelector } from "../Test_Selector"
import { UserPayload } from "@/utiles/types/UserPayload"
import { format } from "date-fns"
import { DatePicker } from "../ui/date-picker"
import DropzoneComponent from "../ReactDropZoneComponont"




const formSchema = z.object({
    username: z.string().min(2, {
      message: "يجب ادخال الاسم",
    }),
    department: z.string().optional(), // Make department optional
    image: z
    .instanceof(File)
    .refine((file) => file?.type === "application/pdf", {
      message: "يجب تحميل ملف PDF فقط",
    })
    .optional(), // Optional PDF file validation

  })

  export interface paylaodType{
    userName:string ;
    comcommittee:number;
    department:number;
    unit:number;
}

const FormAddition = () => {

  const dispatch = useDispatch<AppDispatch>();


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          department:""
        },
      })

    


  const [selectedCommittee, setSelectedCommittee] = useState<string | undefined>(undefined);
  const [selectedDepartment, setSelectedDepartment] = useState<string | undefined>(undefined);
  const [selectedUnit, setSelectedUnit] = useState<string | undefined>();

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);



  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  
  const handleDateChange = (date: Date) => {
    console.log("Selected date:", date);
    // You can set this date to state or use it as needed
    const formattedDate = format(date, "yyyy-MM-dd");

    setSelectedDate(formattedDate)
  };


  const handleFilesAccepted = (files: File[]) => {
    setSelectedFiles((prev) => [...prev, ...files]);
  };

  const handleFileRemoved = (fileName: string) => {
    setSelectedFiles((prev) => prev.filter((file) => file.name !== fileName));
  };


  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const employeeHireDate = selectedDate ? selectedDate : "";
  
    // Check if at least one file is selected
    if (!selectedFiles.length) {
      toast({
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
        title: "الملف فارغ",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">يرجى اختيار ملف PDF</code>
          </pre>
        ),
      });
      return;
    }
  
    // Create the FormData object
    const formData = new FormData();
  
    // Append form fields to FormData
    formData.append("userName", values.username);
    formData.append("employeeHireDate", employeeHireDate);
    formData.append("comcommittee", selectedCommittee!);
    formData.append("department", selectedDepartment!);
    formData.append("unit", selectedUnit!);
    formData.append("employeeNo", "230"); // Assuming employee number is constant or from another input
  
    // Append the file(s) to FormData
    selectedFiles.forEach((file) => formData.append("file", file));
  
    // Dispatch the async thunk to post the data
    dispatch(postUser(formData))
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
  
  

    // try {
    //   // Dispatch the async thunk
    //   const response = await dispatch(postUser(payload)).unwrap();
    //   console.log("User created successfully:", response);
  
    //   toast({
    //     className: cn(
    //       "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
    //     ),
    //     title: "اضافة بيانات",
    //     description: (
    //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //         <code className="text-white">تم اضافة البيانات بنجاح</code>
    //       </pre>
    //     ),
    //   });
    // } catch (error) {
    //   console.error("Error creating user:", error);
    //   toast({
    //     className: cn(
    //       "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
    //     ),
    //     title: "خطأ",
    //     description: (
    //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //         <code className="text-white">حدث خطأ اثناء عملية الاضافة</code>
    //       </pre>
    //     ),
    //   });
    // }




  

  };
  



  return (

    <Form {...form}>
      <form noValidate onSubmit={form.handleSubmit(onSubmit)}  className="space-y-8 text-right">
    
    <Card className="w-[550px]">
    <CardHeader>
      <CardTitle className="text-3xl font-extrabold text-center ">الاضافة</CardTitle>
      <CardDescription className="text-2xl font-extrabold text-center ">صفحة اضافة الموظفيين </CardDescription>
    </CardHeader>
    <CardContent>

     


        <div className="flex flex-col items-end my-3 ">
            
      {/* <Label className="  my-3 text-2xl font-extrabold text-blue-500 text-right" htmlFor="email"> القسم  </Label>

<ComboBoxComponent/> */}


<div className="space-y-4">
      {/* Committee ComboBox */}
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


      <div>
        <p>Selected Committee ID: {selectedCommittee}</p>
        <p>Selected Department ID: {selectedDepartment}</p>
        <p>Selected Unit ID: {selectedUnit}</p>
      </div>
    </div>


    <TestSelector/>



        </div>

        <Separator className="my-4" />
   

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl font-bold text-blue-500">اسم الموظف</FormLabel>
              <FormControl>
                <Input placeholder="اسم الموظف" className="font-extrabold text-lg " {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage className="text-2xl font-bold text-red-600" />
            </FormItem>
          )}
        />
 <Separator className="my-4" />

 <div className="flex flex-col justify-end gap-x-2 space-y-2">
      
      <Label className="text-2xl font-bold text-blue-500" >تأريخ التعيين</Label>
      <DatePicker onDateChange={handleDateChange}  />
      {/* <h2 className="my-4">{selectedDate}</h2> */}
      </div>
        
        <Separator className="my-4" />

       
     
            
            
        <DropzoneComponent
        onFilesAccepted={handleFilesAccepted}
        onFileRemoved={handleFileRemoved}
      />
    

    </CardContent>
      <CardFooter className="flex ">
       
        <Button  className="font-extrabold text-lg m-auto" type="submit">حفظ</Button>

      </CardFooter>
    </Card>

    

    </form>
    </Form>
  )
}

export default FormAddition
