"use client"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import React from 'react'
import ComboBoxComponent from '../form-components/Combobox'
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



const formSchema = z.object({
    username: z.string().min(2, {
      message: "يجب ادخال الاسم",
    }),
  })

const FormAddition = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      })


      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)

        toast({
            className: cn(
                'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
              ),
            title: "You submitted the following values:",
            description: (
              <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">{JSON.stringify(values.username, null, 2)}</code>
              </pre>
            ),

            // action: (
            //     <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            //   ),
          })
      }


  return (

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-right">
    
    <Card className="w-[550px]">
    <CardHeader>
      <CardTitle className="text-3xl font-extrabold text-center ">الاضافة</CardTitle>
      <CardDescription className="text-2xl font-extrabold text-center ">صفحة اضافة الموظفيين </CardDescription>
    </CardHeader>
    <CardContent>

     


        <div className="flex flex-col items-end my-3 ">
            
      <Label className="  my-3 text-2xl font-extrabold text-blue-500 text-right" htmlFor="email"> القسم  </Label>

<ComboBoxComponent/>
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

       
      <Label className="text-2xl text-blue-500 font-bold" htmlFor="picture">ملف</Label>
      <Input id="image" type="file"  />
    

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
