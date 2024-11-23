import { CreateUsersleDto } from "@/utiles/dtos";
import { createUsersleSchema } from "@/utiles/validationSchema";
import { NextRequest,NextResponse } from "next/server";
import prisma from '@/utiles/db';
import { Users } from "@prisma/client";


export async function POST(request: NextRequest) {
    try {
  
      const body = (await request.json()) as CreateUsersleDto;

      console.log("body",body);
  
      const validation = createUsersleSchema.safeParse(body);
      if (!validation.success) {
        return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 });
      }
  
      const newUser:Users = await prisma.users.create({
        data: {
       
          userName:body.userName,
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