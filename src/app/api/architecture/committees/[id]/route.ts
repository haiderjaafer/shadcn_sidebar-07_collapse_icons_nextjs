import { NextRequest, NextResponse } from "next/server";
import prisma from '@/utiles/db';


//http://localhost:3000/api/architecture/committees/5/5

interface Props {
  params: { id: string }; // Ensure this matches the dynamic segment type
}

// Dynamic route handler
export async function GET(req: NextRequest,  context: { params: Promise<{ id: string }> }) {

  const id = (await context.params).id;

   try {

    //return NextResponse.json({ id }, { status: 200 });

    const departments = await prisma.department.findMany({
      where: { co : parseInt(id) }, // Adjust field name to match your Prisma schema
    
    });

     if (departments.length === 0) {
      return NextResponse.json({ message: 'No departments found' }, { status: 404 });
    }

   return NextResponse.json({ departments }, { status: 200 });
  } catch (error) {
    console.error('Error fetching departments:', error);
    return NextResponse.json(
      { message: 'Error fetching departments' },
      { status: 500 }
    );
  }
}



// Dynamic route handler
// export async function GET(req: NextRequest,  context: { params: Promise<{ id: string }> }) {


//   const id = (await context.params).id;

//   console.log("id", id);


//   // if (isNaN(id)) {            //isNaN stands for "is Not-a-Number". It checks if a value is NaN (Not-a-Number).

//   //   return NextResponse.json(
//   //     { message: 'Invalid committee ID' },
//   //     { status: 400 }
//   //   );
//   // }

//    try {

//     const departments = await prisma.department.findMany({
//       where: { co : parseInt(id) }, // Adjust field name to match your Prisma schema
    
//     });

//      if (departments.length === 0) {
//       return NextResponse.json({ message: 'No departments found' }, { status: 404 });
//     }

//     return NextResponse.json({ departments }, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching departments:', error);
//     return NextResponse.json(
//       { message: 'Error fetching departments' },
//       { status: 500 }
//     );
//   }
// }
