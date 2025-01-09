import { NextRequest, NextResponse } from "next/server";
import prisma from '@/utiles/db';
import axios from "axios";


//http://localhost:3000/api/employee_salary_sheet
export async function GET(req: NextRequest, res: NextResponse) {

    const { searchParams } = new URL(req.url);
    const empNo = searchParams.get('EMP_NO');


    if (!empNo) {
        return NextResponse.json(
          { message: 'EMP_NO is required' },
          { status: 400 }
        );
      }
  
    try {


const employee = await prisma.employeeModel.findUnique({
      where: { EMP_NO: "008049" },
      include: {
        deductionModel: true, // Include related deductions
      },
    });

    if (!employee) {
      return NextResponse.json(
        { message: 'Employee not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(employee, { status: 200 });
        
        
      
 
    
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'employee not found' }, { status: 404 });
    }
  }

  