import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

type User = {
    userName: string;
    empNo: string;
    employeeHireDate: Date | string;
    committee: string;
    department: string;
    unit: string;
    committeeID: number;
    departmentID: number; // Represents department code
    unitID: number; // Represents unit code
    qrCode:String;
  };


export async function GET(req: NextRequest ) {


    try {

    //   const reqUrl = req.url
    // const { searchParams } = new URL(reqUrl)
    // console.log(searchParams.get("empNo")) // should print lorem

     // const empNo = req.nextUrl.searchParams.get("empNo");

     const empNo = req.nextUrl.searchParams.get("empNo") ?? null; // Or a default value

      console.log("emp No .........",empNo);

      console.log("All query parameters:", req.nextUrl.searchParams.get("empNo"));
  
      console.log("qr route ...........");
      
       // Extract query parameters from the URL
    const committee = req.nextUrl.searchParams.get('committee');
    const department = req.nextUrl.searchParams.get('department');
    const unit = req.nextUrl.searchParams.get('unit');
  
     console.log("committee",typeof committee,typeof department,typeof unit);
  
      if (!committee || !department || !unit) {
          return NextResponse.json({ error: 'Missing query parameters' }, { status: 400 });
        }


        const users: User[] = await prisma.$queryRaw`
        SELECT dbo.Users.userName, dbo.Users.empNo, dbo.Users.employeeHireDate, dbo.com.com AS committee, dbo.department.com AS department, dbo.unit.unit, dbo.Users.qrCode
  FROM     dbo.Users INNER JOIN
                    dbo.com ON dbo.Users.comcommittee = dbo.com.co INNER JOIN
                    dbo.department ON dbo.Users.department = dbo.department.de AND dbo.com.co = dbo.department.co INNER JOIN
                    dbo.unit ON dbo.Users.unit = dbo.unit.un AND dbo.com.co = dbo.unit.co AND dbo.department.de = dbo.unit.de
        WHERE (dbo.Users.comcommittee = ${Number(committee)}) 
        AND (dbo.Users.department = ${Number(department)}) 
        AND (dbo.Users.unit = ${Number(unit)})
      `;

      
    if (!users || users.length === 0) {
        return NextResponse.json({ error: 'No employees found for the given criteria' }, { status: 404 });
      }


      const employee = await Promise.all(
        users.map(async (user) => {
  
  
       
       
     // Return both employee data and QR code
          return {
            user: {
              userName: user.userName,
              empNo: user.empNo,
              employeeHireDate: user.employeeHireDate,
              committee: user.committee,
              department: user.department,
              unit: user.unit,
              qrCode: user.qrCode,   
            },
           
           
          };
        })
      );





            // Return a JSON response with both the users and their respective QR codes
    return NextResponse.json({ employee }, { status: 200 });
} catch (error) {
  console.error(error);
  return NextResponse.json({ error: 'Failed to generate QR codes' }, { status: 500 });
} finally {
  await prisma.$disconnect(); // Disconnect Prisma client after use
}
    }