import { CreateUsersDto } from "@/utiles/dtos";
import { createUsersleSchema } from "@/utiles/validationSchema";
import { NextRequest,NextResponse } from "next/server";
import prisma from '@/utiles/db';
import { format } from "date-fns";
import { handleFileUpload } from "@/utiles/helperFunctions/handleFilesUploads";





export async function POST(request: NextRequest) {
    try {

      const formData = await request.formData();


   // Extract individual fields from form-data
   const userName = formData.get("userName") as string | null;
   const employeeHireDate = formData.get("employeeHireDate") as string | null;
   const comcommittee = Number(formData.get("comcommittee"));
   const department = Number(formData.get("department"));
   const unit = Number(formData.get("unit"));
   const employeeNo = formData.get("employeeNo") as string | null;
   const file = formData.get("file") as File | null;


  
      const validation = createUsersleSchema.safeParse({
      userName,
      employeeHireDate,
      comcommittee,
      department,
      unit,
      employeeNo,
      
      });


      if (!validation.success) {
        return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 });
      }

      if (!file) {
        return NextResponse.json(
          { message: 'File is required for upload' },
          { status: 400 }
        );
      }


   // Handle file upload if file exists
   let filePath = null;
   if (file) {
     filePath = await handleFileUpload(file, employeeNo!, employeeHireDate!);
   }

      

      // Format the date
    const formattedDate = format(new Date(employeeHireDate!), "yyyy-MM-dd");


    // Save data in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create a new user
      const newUser = await tx.users.create({
        data: {
          userName: userName!,
          employeeHireDate: new Date(formattedDate),
          comcommittee,
          department,
          unit,
        },
      });

      // Create the PDF URL record
      if (filePath) {
        await tx.updfUrlsModel.create({
          data: {
            pdfUrl: filePath,
            pdfUrlDate: new Date(formattedDate),
            userID: newUser.id,
          },
        });
      }

      return newUser;
    });

    return NextResponse.json(result, { status: 201 });

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
//          "department":58,
//          "unit" :396
// }

