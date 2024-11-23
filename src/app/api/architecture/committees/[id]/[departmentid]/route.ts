import { NextRequest, NextResponse } from "next/server";
import prisma from '@/utiles/db';


//http://localhost:3000/api/architecture/committees/2/2/

interface Props {
    params: {
      id: string;
      departmentid: string;
    };
  }

// Dynamic route handler
export async function GET(req: NextRequest, context: { params: Promise<{ id: string, departmentid: string }> }) {
    const { id, departmentid } = ( await context.params);

  

    try {
      //  return NextResponse.json({id, departmentid }, { status: 200 });
       
  // Prisma query to fetch the units
  const units = await prisma.unit.findMany({
    where: {
      co: parseInt(id), // unitid corresponds to "un"
      de: parseInt(departmentid), // id corresponds to "co"
    },
    // include: {
    //   committee: true, // Include related committee information
    //   departmentName: true, // Include related department information
    // },
  });

  // If no matching units found
//   if (units.length === 0) {
//     return NextResponse.json(
//       { message: 'No units found for the given criteria' },
//       { status: 404 }
//     );
//   }

//   // Return the units
   return NextResponse.json({ units });
      
       
       

       

    
        //  if (departments.length === 0) {
        //   return NextResponse.json({ message: 'No departments found' }, { status: 404 });
        // }
    
        // return NextResponse.json({ departments }, { status: 200 });
      } catch (error) {
        console.error('Error fetching departments:', error);
        return NextResponse.json(
          { message: 'Error fetching departments' },
          { status: 500 }
        );
      }



  }
