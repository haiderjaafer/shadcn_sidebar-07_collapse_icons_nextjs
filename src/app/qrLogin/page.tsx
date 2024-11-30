'use client';

import { useRouter } from 'next/navigation'; // Update based on Next.js 15
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';



export default function Login() {
  const [decodedEmpNo, setDecodedEmpNo] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const secretKey = 'privateKey1298488004322'; // Replace with your real secret key

  useEffect(() => {
    function verifyToken() {
      try {
        // Test token for demonstration purposes
        const testToken =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBObyI6Ijc2OCIsImlhdCI6MTczMjgzNzE4MCwiZXhwIjoxNzMyODQ0MzgwfQ.7Wt1coUNCq2Jm-HlKFIkMMC5KqK8-H6ipeaRCQndzYM';

        // Verify the JWT token and extract the payload
        const userPayload = jwt.verify(testToken, secretKey) as { empNo: string };

        console.log("Decoded Employee Number:", userPayload.empNo);
        setDecodedEmpNo(userPayload.empNo); // Update state with empNo
      } catch (error) {
        console.error('Error verifying token:', error);
        setError('Invalid or expired QR code');
      }
    }

    verifyToken(); // Call the function inside useEffect
  }, []); // Run only once after component mounts

  return (
    <div>
      {error ? (
        <h1>{error}</h1>
      ) : decodedEmpNo ? (
        <h1>Logged in with Employee No: {decodedEmpNo}</h1>
      ) : (
        <h1>Loading...</h1> // Show a loading state until token is verified
      )}
    </div>
  );
}









// export default function Login() {
//     const [decodedEmpNo, setDecodedEmpNo] = useState<string | null>(null);
//     const [error, setError] = useState<string | null>(null);

//    // const secretKey = process.env.JWT_SECRET as string;
  
//     // **Test Token** (Replace it with a token you generated from your API)
    


//       function verifyToken() {   // هذا الفاكشن وظيفتة يفتح تشفير التوكن
//         try {
           
//             const testToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBObyI6Ijc2OCIsImlhdCI6MTczMjgzNjMwMCwiZXhwIjoxNzMyODQzNTAwfQ.8meEFI1OqbY7UQqEPTqdji-2gFjqF_G8yu1xBd15LhI';
           
//             const privateKey = process.env.JWT_SECRET as string;
//             const userPayload = jwt.verify(testToken, "privateKey1298488004322") as { empNo: string };

//             console.log("userPayload" +userPayload.empNo);
//             setDecodedEmpNo(userPayload.empNo);
            
    
//             return userPayload;
//         } catch (error) {
//             setError('Invalid or expired QR code');
//         }
//     }

//             const verify = verifyToken();

//             console.log("ffff",verify?.empNo);
  
//     // useEffect(() => {

//      //    verifyToken();
//     //   try {
//     //     // Decode without verification (for debugging)
//     //     const decodedWithoutVerification = jwt.decode(testToken);
//     //     console.log('Decoded without verification:', decodedWithoutVerification);
  
//     //     // Verify and decode the JWT
//     //     const decoded = jwt.verify(testToken, secretKey) as { empNo: string };
//     //     console.log('Decoded Token (Verified):', decoded);
  
//     //     setDecodedEmpNo(decoded.empNo); // Save empNo to state
//     //   } catch (err) {
//     //     console.error('Invalid token:', err);
//     //     setError('Invalid or expired QR code');
//     //   }
//    //  }, []);
  
//     return (

//         <div>
//         {verify?.empNo ? (
//          <h3>{verify.empNo}</h3>
//         ) : (
//           <h1>Logged in with Employee No: {decodedEmpNo}</h1>
//         )}
//       </div>
    
    //     <div>
    //   {decodedEmpNo ? (

    //     <h2>{decodedEmpNo}</h2>
           
    //     ) : (
    //         <h1 >
    //           no 
    //         </h1>
    //     )}
    // </div>

  //  );
 // }

