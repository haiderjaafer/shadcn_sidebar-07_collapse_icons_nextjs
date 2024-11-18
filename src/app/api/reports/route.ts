import { NextRequest, NextResponse } from "next/server";

import axios from "axios";

interface Props{
    params:{id:string}

}







export async function GET(req: NextRequest, res: NextResponse) {
  
  try {
    const url = "http://localhost:8080/jasperserver/rest_v2/reports/reports/orderReport/orderReportSample.pdf";

        const params = {
        orderID : "123",
        orderNo : "12/2024",
      
      }

      const file = await axios.get(url, {
       // data: params,  if there is a parameters passed into report
        responseType: 'stream',
        auth: {
          username: 'jasperadmin',
          password: 'jasperadmin',
        },
      });

      

    // Set Content-Type header based on URL extension
    const contentType = url.endsWith('.pdf') ? 'application/pdf' : 'text/html'; // Adjust for other formats

    return new Response(file.data, {
      headers: {
        'Content-Type': contentType,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Report not found' }, { status: 404 });
  }
}




// export  async function GET(req :NextRequest, res :NextResponse) {
 
  
//     try {
//       const url = "http://localhost:8080/jasperserver/rest_v2/reports/reports/orderReport/orderReportSample.pdf";
  
//       const file = await axios.get(url, {
//         responseType: 'stream',
//         auth: {
//           username: 'jasperadmin',
//           password: 'jasperadmin',
//         },
//       });
  
//           // Set the Content-Type header
//     res.setHeader('Content-Type', 'application/pdf');

//     console.log("api reports");

   
//       file.data.pipe(res);
//     } catch (error) {
//       console.error(error);
//       return NextResponse.json({ message: 'article not found' }, { status: 404 });
//     }
//   }



// export async function GET(request: NextRequest, { params }: Props) {
//   try {

//     const url = "http://localhost:8080/jasperserver/rest_v2/reports/reports/orderReport/orderReportSample.pdf"
//     //  const url = "http://localhost:8081/jasperserver/rest_v2/reports/reports/ordersJasperReport/ordersReport.html"
//      // const url = "http://localhost:8081/jasperserver/rest_v2/reports/reports/ordersJasperReport/ordersReport.pdf"
//     //   const params = {
//     //     AMB_OCULTO : "123",
//     //     AMB : "123",
//     //     INS : "FF",
//     //     ORD_INI: "419435",
//     //     ORD_FIN: "419435"
//     //   }
//       const file = await axios.get (url, {
//        // params: params,
//         responseType: "stream",
//         auth: {
//           username: "jasperadmin",
//           password: "jasperadmin"
//         }
//       })
//       NextResponse.writeHead (200, {"Content-Type":"application/pdf"})
//     // res.writeHead(200, { "Content-Type": "text/html" });
//       file.data.pipe (res)
      
    

//     //   if (!article) {
//     //       return NextResponse.json({ message: 'article not found' }, { status: 404 });
//     //   }


//      // return NextResponse.json(article, { status: 200 });


//   } catch (error) {
//       return NextResponse.json(
//           { message: "internal server error" },
//           { status: 500 }
//       );
//   }
// }