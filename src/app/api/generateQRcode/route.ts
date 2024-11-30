import { NextRequest, NextResponse } from "next/server";
import QRCode from 'qrcode';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client'

//import {getUsers} from "@prisma/client/sql";

//const secretKey = process.env.JWT_SECRET as string;
const prisma = new PrismaClient();

type User = {

    empNo: string;

    committee: string;
    department: string;
    unit: string;

  };

export async function POST(req: NextRequest ) {


  try {

    console.log("qr route ...........");
    
     // Extract query parameters from the URL
  // const committee = req.nextUrl.searchParams.get('committee');
  // const department = req.nextUrl.searchParams.get('department');
  // const unit = req.nextUrl.searchParams.get('unit');
  const formData = await req.formData();

  const committee = Number(formData.get("committee"));
  const department = Number(formData.get("department"));
  const unit = Number(formData.get("unit"));


   //console.log("committee",typeof committee,typeof department,typeof unit);
   console.log("FORM DATA ", committee, department, unit);


    if (!committee || !department || !unit) {
        return NextResponse.json({ error: 'Missing query parameters' }, { status: 400 });
      }


    // Hardcoded values for comcommittee, department, and unit
    // const committee = 6;
    // const department = 59;
    // const unit = 400;

    // Fetch users based on the given criteria
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

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

   

    // Generate QR codes with JWT for each employee
    const qrCodes = await Promise.all(
      users.map(async (user) => {
        const empNo = user.empNo;
//////////////////////////////////////////////////////////////////////////////////////////
       // console.log("users...", empNo ,user);

        // Create a JWT containing the empNo
        //const token = jwt.sign({ empNo }, 'privateKey1298488004322', { expiresIn: '2h' });

        // Embed the token in the QR code URL
       // const qrCodeURL = `${baseUrl}/login?token=${token}`;
       //const qrCodeURL = `${token}`;
       //const qrCodeDataURL = await QRCode.toDataURL(empNo); this was worked
       ///////////////////////////////////////////////////////////////////

       // URL that the QR code will point to, e.g., http://localhost:3000/redirect?empNo=8049
    const redirectUrl = `${baseUrl}/redirect?empNo=${empNo}`;

    console.log("Generating QR code for URL:", redirectUrl);

    // Generate QR code as a data URL
    const qrCodeDataURL = await QRCode.toDataURL(redirectUrl);


        // Update the user record with the generated QR code
        const updatedUser = await prisma.users.update({
          where: { empNo: empNo },
          data: { qrCode: qrCodeDataURL },
        });

        // Return both employee data and QR code
        return {
          user: {
           
            empNo: updatedUser.empNo,
           
            committee: user.committee,
            department: user.department,
            unit: user.unit,
          },
          qrCode: qrCodeDataURL,
         // token:token
        };
      })
    );

    // Return a JSON response with both the users and their respective QR codes
    return NextResponse.json({ qrCodes }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to generate QR codes' }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client after use
  }
}


































// const secretKey = process.env.JWT_SECRET_KEY || 'your_secret_key';

// export async function POST(req: Request) {
//   try {

//     const empNoParameter =   '900'
//     const comcommittee = 6
//     const department = 58
//     const unit = 396

//     const prisma = new PrismaClient()
//    // const users = await prisma.$queryRaw`SELECT id, userName, comcommittee, empNo, department, unit, employeeHireDate FROM dbo.Users WHERE  (empNo = ${empNoParameter})`
//    // const users = await prisma.$queryRaw`SELECT id, userName, comcommittee, empNo, department, unit, employeeHireDate FROM dbo.Users WHERE  ( comcommittee = ${comcommittee}) AND (department = ${department}) AND (unit = ${unit}) `

//    const users = await prisma.$queryRaw`SELECT dbo.Users.userName, dbo.Users.empNo, dbo.Users.employeeHireDate, dbo.com.com, dbo.department.com AS Department, dbo.unit.unit, dbo.Users.comcommittee, dbo.Users.department AS Expr1, dbo.Users.unit AS Expr2
// FROM     dbo.Users INNER JOIN
//                   dbo.com ON dbo.Users.comcommittee = dbo.com.co INNER JOIN
//                   dbo.department ON dbo.Users.department = dbo.department.de AND dbo.com.co = dbo.department.co INNER JOIN
//                   dbo.unit ON dbo.Users.unit = dbo.unit.un AND dbo.com.co = dbo.unit.co AND dbo.department.de = dbo.unit.de
// WHERE  (dbo.Users.comcommittee = ${comcommittee}) AND (dbo.Users.department = ${department}) AND (dbo.Users.unit = ${unit})`

//   // const users = await prisma.$transaction(getUsers());
//    console.log(users)



//     const { empNos }: { empNos: string[] } = await req.json();

//     if (!empNos || !Array.isArray(empNos) || empNos.length === 0) {
//       return NextResponse.json({ error: 'Employee numbers are required' }, { status: 400 });
//     }

//     const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

//     // Generate QR codes with JWT for each employee
//     const qrCodes = await Promise.all(
//       empNos.map(async (empNo) => {
//         // Create a JWT containing the empNo
//         const token = jwt.sign({ empNo }, secretKey, { expiresIn: '1h' });

//         // Embed the token in the QR code URL
//         const qrCodeURL = `${baseUrl}/login?token=${token}`;
//         const qrCodeDataURL = await QRCode.toDataURL(qrCodeURL);

//         return { empNo, qrCode: qrCodeDataURL };
//       })
//     );

//    // return NextResponse.json(users, { status: 200 });

//     return NextResponse.json({qrCodes,users}, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to generate QR codes' }, { status: 500 });
//   }
// }
