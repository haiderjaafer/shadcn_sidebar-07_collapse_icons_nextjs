import { z } from "zod";

// Create Article Schema
 export const createUsersleSchema = z.object({
    userName: z.string(),
    employeeHireDate: z.string().refine((date) => !isNaN(Date.parse(date)), {  message: 'Invalid date format', }), // Ensure it's a valid date string
    comcommittee: z.number(),
    department: z.number(),
    unit: z.number(),
   
});