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

        // State to hold the file name
  const [fileName, setFileName] = useState<string | null>(null);


  const [selectedCommittee, setSelectedCommittee] = useState<string | undefined>(undefined);
  const [selectedDepartment, setSelectedDepartment] = useState<string | undefined>(undefined);
  const [selectedUnit, setSelectedUnit] = useState<string | undefined>();




  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  
  const handleDateChange = (date: Date) => {
    console.log("Selected date:", date);
    // You can set this date to state or use it as needed
    const formattedDate = format(date, "yyyy/MM/dd ");

    setSelectedDate(formattedDate)
  };





  const onSubmit = async (values: z.infer<typeof formSchema>) => {


    const employeeHireDate = selectedDate ? selectedDate : '';
  
   // Create the FormData object
  const formData = new FormData();
  
    const fileInput = document.querySelector<HTMLInputElement>("#fileInput");
  if (fileInput && fileInput.files && fileInput.files.length > 0) {
    formData.append("file", fileInput.files[0]);
  } else {
    toast({
      className: cn(
        "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
      ),
      title: "خطأ",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">يجب إرفاق ملف</code>
        </pre>
      ),
    });
    return;
  }
  
    const payload: CreateUserPayload = {
      userName: values.username,
      employeeHireDate,
      comcommittee: parseInt(selectedCommittee!, 10),
      department: parseInt(selectedDepartment!, 10),
      unit: parseInt(selectedUnit!, 10),
      employeeNo:"130",                // need got from form
      file: fileInput?.files?.[0], // Attach the selected file
    };


    try {
      // Dispatch the async thunk
      const response = await dispatch(postUser(payload)).unwrap();
      console.log("User created successfully:", response);
  
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
    } catch (error) {
      console.error("Error creating user:", error);
      toast({
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
        title: "خطأ",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">حدث خطأ اثناء عملية الاضافة</code>
          </pre>
        ),
      });
    }




  
    // dispatch(postUser(payload))
    //   .unwrap()
    //   .then((response) => {
    //     console.log('User created successfully:', response);
    //   })
    //   .catch((error) => {
    //     console.error('Error creating user:', error);
    //   });
  };
  



  return (

    <Form {...form}>
      <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-right">
    
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

       
      <Label className="text-2xl text-blue-500 font-bold" htmlFor="picture">ملف</Label>
      <Controller
              name="image"
              control={form.control}
              render={({ field }) => (
                <div className="flex  items-center justify-end  bg-slate-300 rounded-lg gap-4">
                  {/* Display the file name below the file input...fileName put it here for display it in right*/}
                     {fileName && (
                    <div className="mt-2 text-sm text-gray-600">
                <strong>{ fileName}</strong> 
                      </div>
                       )}

                  {/* Hidden file input */}
                  <input
                    id="image"
                    type="file"
                    accept=".pdf"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      field.onChange(file); // Set the selected file in the form state
                      setFileName(file ? file.name : null); // Update the file name state
                     

                    }}
                    className="hidden" // Hide the default file input
                  />
                  {/* Custom label styled as a button */}
                  <label
                    htmlFor="image"
                    className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    اختر ملف
                  </label>
          
                </div>
              )}
            />
            
            
            <input type="file" id="fileInput" accept=".pdf" required />
    

    </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button  type="submit">Submit</Button>
      </CardFooter>
    </Card>

    </form>
    </Form>
  )
}

export default FormAddition
