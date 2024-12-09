import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

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
   
            // Return a JSON response with both the users and their respective QR codes
    return NextResponse.json({ empNo : empNo }, { status: 200 });
} catch (error) {
  console.error(error);
  return NextResponse.json({ error: 'Failed to generate QR codes' }, { status: 500 });
} finally {
  await prisma.$disconnect(); // Disconnect Prisma client after use
}
    }