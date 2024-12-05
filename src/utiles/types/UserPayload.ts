
export type UserPayload = {
    userName: string;
    employeeHireDate: string; // Dates are typically sent as strings in JSON
    comcommittee: number;
    department: number;
    unit: number;
  };


  import * as z from "zod"

export const updateEmployeeSchema = z.object({
  userName: z.string().min(1, "User name is required"),
  empNo: z.string().min(1, "Employee number is required"),
  department: z.string().optional(),
  unit: z.string().optional(),
})

export type UpdateEmployeeSchema = z.infer<typeof updateEmployeeSchema>
