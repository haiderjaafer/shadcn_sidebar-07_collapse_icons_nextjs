"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Loader } from "lucide-react"
import { useSelector } from "react-redux"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"


//import { updateEmployeeSchema, type UpdateEmployeeSchema } from "../_lib/validations"
import { RootState } from "@/store/store"
import { UpdateEmployeeSchema, updateEmployeeSchema } from "@/utiles/types/UserPayload"

// Define the props for the component
interface UpdateEmployeeSheetProps extends React.ComponentPropsWithRef<typeof Sheet> {
  employee: any | null
  onOpenChange: (open: boolean) => void
}

export function UpdateEmployeeSheet({ employee, ...props }: UpdateEmployeeSheetProps) {
  const [isUpdatePending, startUpdateTransition] = React.useTransition()
  const { employees } = useSelector((state: RootState) => state.employeesQRCodeReducer)

  const form = useForm<UpdateEmployeeSchema>({
    resolver: zodResolver(updateEmployeeSchema),
    defaultValues: {
      userName: employee?.userName ?? "",
      empNo: employee?.empNo ?? "",
      department: employee?.department ?? "",
      unit: employee?.unit ?? "",
    },
  })

  React.useEffect(() => {
    form.reset({
      userName: employee?.userName ?? "",
      empNo: employee?.empNo ?? "",
      department: employee?.department ?? "",
      unit: employee?.unit ?? "",
    })
  }, [employee, form])

  function onSubmit(input: UpdateEmployeeSchema) {
    startUpdateTransition(async () => {
      if (!employee) return

      // Perform update logic here (e.g., call an API)
      const success = true // Mock API response

      if (!success) {
        toast.error("Failed to update employee")
        return
      }

      form.reset()
      props.onOpenChange(false)
      toast.success("Employee updated")
    })
  }

  return (
    <Sheet {...props}>
      <SheetContent className="flex flex-col gap-6 sm:max-w-md">
        <SheetHeader className="text-left">
          <SheetTitle>Update Employee</SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            {/* User Name */}
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter name" className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Employee Number */}
            <FormField
              control={form.control}
              name="empNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Employee Number</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter employee number" className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Department */}
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter department" className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Unit */}
            <FormField
              control={form.control}
              name="unit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unit</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter unit" className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SheetFooter className="gap-2 pt-2 sm:space-x-0">
              <SheetClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </SheetClose>
              <Button disabled={isUpdatePending}>
                {isUpdatePending && <Loader className="mr-2 size-4 animate-spin" aria-hidden="true" />}
                Save
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}
