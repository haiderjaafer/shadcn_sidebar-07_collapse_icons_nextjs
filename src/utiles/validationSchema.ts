import { z } from "zod";

// Create Article Schema
 export const createUsersleSchema = z.object({
    userName: z.string(),
    employeeHireDate: z.string().refine((date) => !isNaN(Date.parse(date)), {  message: 'Invalid date format', }), // Ensure it's a valid date string
    comcommittee: z.number(),
    department: z.number(),
    unit: z.number(),
   
});





export const updateEmployeeSchema = z.object({
  userName: z.string().min(1, "User name is required"),
  committee:z.string().min(1, "com is required"),
  empNo: z.string().min(1, "Employee number is required"),
  department: z.string().optional(),
  unit: z.string().optional(),
})

export type UpdateEmployeeSchema = z.infer<typeof updateEmployeeSchema>
