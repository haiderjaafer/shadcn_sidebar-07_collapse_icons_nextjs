import { CreateUsersDto } from "@/utiles/dtos";
import { createUsersleSchema } from "@/utiles/validationSchema";
import { NextRequest,NextResponse } from "next/server";
import prisma from '@/utiles/db';
import { Users } from "@prisma/client";
import { format } from "date-fns";


export async function POST(request: NextRequest) {
    try {
  
      const body = (await request.json()) as CreateUsersDto;

      console.log("body",body);
  
      const validation = createUsersleSchema.safeParse(body);
      if (!validation.success) {
        return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 });
      }

      // Format the date to ensure only YYYY-MM-DD is stored
    const formattedDate = format(new Date(body.employeeHireDate), 'yyyy-MM-dd');
  
      const newUser:Users = await prisma.users.create({
        data: {
       
          userName:body.userName,
          employeeHireDate: new Date(formattedDate), // Convert the formatted date back to a Date object
         comcommittee:body.comcommittee,
          department:body.department,
          unit :body.unit
        }
      });
  
      return NextResponse.json(newUser, { status: 201 });


    } catch (error) {
      console.error("Internal Server Error:", error);

      return NextResponse.json(
        { message: "internal server error",error: error || error  },
        { status: 500 }
      )
    }
  }


//   {
//     "userName":"علي حسن محمد عبد اللة",
//     "employeeHireDate":"2022-10-10",
//          "comcommittee":6,
//          "department":57,
//          "unit" :305
// }