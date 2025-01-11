import { NextRequest, NextResponse } from "next/server";
import prisma from '@/utiles/db';



//http://localhost:3000/api/employee_salary_sheet/employees?empNo=008049

export async function GET(req: NextRequest) {

    const { searchParams } = new URL(req.url);
  const empNo = searchParams.get('empNo');

  console.log("emp",empNo);


    if (!empNo) {
        return NextResponse.json(
          { message: 'EMP_NO is required' },
          { status: 400 }
        );
      }
  
    try {


const employee = await prisma.employeeModel.findUnique({
      where: { EMP_NO: empNo },
      include: {
        deductionModel: true, // Include related deductions
        
        userRelation: {
          select: {
            userName: true,
            qrCode: true,
          },
        },
        
        
        
      },
      
      
    });

    if (!employee) {
      return NextResponse.json(
        { message: 'Employee not found' },
        { status: 404 }
      );
    }

   // Add qrCode directly to the employee object
const employeeWithQRCode = {
  ...employee,
  QRCode: employee.userRelation?.qrCode || null, // Assign qrCode or null if it doesn't exist
  deductions: employee.deductionModel || [], // Include deductionModel as deductions array

};

return NextResponse.json(employeeWithQRCode, { status: 200 });
        
        
      
 
    
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'employee not found' }, { status: 404 });
    }
  }

  