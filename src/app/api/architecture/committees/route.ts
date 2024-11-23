import { NextRequest, NextResponse } from "next/server";
import prisma from '@/utiles/db';
import axios from "axios";


export async function GET(req: NextRequest, res: NextResponse) {
  
    try {

// Fetch committees from the database
const committees = await prisma.com.findMany();

// Return the results as JSON

return NextResponse.json({ committees }, { status: 404 });


    
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'committee not found' }, { status: 404 });
    }
  }
  
  