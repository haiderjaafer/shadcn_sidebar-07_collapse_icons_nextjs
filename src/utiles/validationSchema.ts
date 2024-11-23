import { z } from "zod";

// Create Article Schema
 export const createUsersleSchema = z.object({
    userName: z.string(),
    comcommittee: z.number(),
    department: z.number(),
    unit: z.number(),
   
});