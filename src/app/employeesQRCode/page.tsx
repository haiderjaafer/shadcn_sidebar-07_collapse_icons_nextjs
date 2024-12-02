'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { fetchEmployees } from '@/store/slices/employeesQRCodeSlice';
import Image from 'next/image';
import { Employee } from '@/store/slices/employeesQRCodeSlice';
import { format } from "date-fns";
import { useRouter } from 'next/router';



const EmployeesPage = () => {

  // const router = useRouter();
  // const { empNo } = router.query; // Get empNo from query parameters

  // console.log(empNo)

  const dispatch = useDispatch<AppDispatch>();
  const { employees, loading, error } = useSelector((state: RootState) => state.employeesQRCodeReducer);

  useEffect(() => {
    console.log("useEffect called"); // Check if this is logged
   

    // Fetch data with specified query parameters
    dispatch(fetchEmployees({ committee: '6', department: '58', unit: '396' }));
  }, [dispatch]);

//   if (!Array.isArray(employees)) {
//     return <p>Invalid data structure received</p>;
//   }
  
  

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!employees || employees.length === 0) {
    return <p>No employees found.</p>;
  }
  return (


    <div className="max-w-screen-lg mx-auto px-6">
    <h1 className="text-2xl font-bold mb-4 text-center">Responsive Table</h1>
  
    <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-700">
      <table className="w-full border-collapse bg-gray-800 text-white">
        {/* Table Header */}
        <thead className="hidden md:table-header-group">
          <tr>
            <th className="p-4 bg-gray-900 text-left uppercase font-bold">User Name</th>
            <th className="p-4 bg-gray-900 text-left uppercase font-bold">Employee Number</th>
            <th className="p-4 bg-gray-900 text-left uppercase font-bold">Hire Date</th>
            <th className="p-4 bg-gray-900 text-left uppercase font-bold">Committee</th>
            <th className="p-4 bg-gray-900 text-left uppercase font-bold">Department</th>
            <th className="p-4 bg-gray-900 text-left uppercase font-bold">Unit</th>
            <th className="p-4 bg-gray-900 text-left uppercase font-bold">QR Code</th>
          </tr>
        </thead>
  
        {/* Table Body */}
        <tbody>
          {employees.map((employee: Employee, index) => (
            <tr
              key={index}
              className={`block md:table-row p-4 border-b border-gray-700 ${
                index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
              }`}
            >
              {/* Responsive Row - Mobile */}
              <td className="block md:table-cell p-2">
                <span className="block font-bold md:hidden uppercase text-gray-400">User Name</span>
                <span>{employee.userName}</span>
              </td>
  
              <td className="block md:table-cell p-2">
                <span className="block font-bold md:hidden uppercase text-gray-400">Employee Number</span>
                <span>{employee.empNo}</span>
              </td>
  
              <td className="block md:table-cell p-2">
                <span className="block font-bold md:hidden uppercase text-gray-400">Hire Date</span>
                <span>{format(new Date(employee.employeeHireDate), 'yyyy-MM-dd')}</span>
              </td>
  
              <td className="block md:table-cell p-2">
                <span className="block font-bold md:hidden uppercase text-gray-400">Committee</span>
                <span>{employee.committee}</span>
              </td>
  
              <td className="block md:table-cell p-2">
                <span className="block font-bold md:hidden uppercase text-gray-400">Department</span>
                <span>{employee.department}</span>
              </td>
  
              <td className="block md:table-cell p-2">
                <span className="block font-bold md:hidden uppercase text-gray-400">Unit</span>
                <span>{employee.unit}</span>
              </td>
  
              <td className="block md:table-cell p-2">
                <span className="block font-bold md:hidden uppercase text-gray-400">QR Code</span>
                <Image
                  src={employee.qrCode}
                  alt={`${employee.userName} QR Code`}
                  width={100}
                  height={100}
                  className="mx-auto md:mx-0"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  


  
    // <>

    
     
      

    // <div className="container mx-auto p-4">
    //      {/* <button
    //       onClick={() =>
    //         //Dispatch the action with vote "up"
    //         dispatch(fetchEmployees({ committee: '6', department: '58', unit: '396' }))
    //       }
    //     >
    //       click
    //     </button> */}
    //   <h1 className="text-2xl font-bold mb-4">Employee QR Codes</h1>
    //   <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //   {employees.map((employee: Employee, index) => (
    //       <li className="p-4 border rounded-lg shadow-lg" key={index}>
    //         <p className="text-lg font-semibold">Employee Name: {employee.userName}</p>
    //         <p>Emp No: {employee.empNo}</p>
    //         <p>Hire Date:  { format( new Date(employee.employeeHireDate).toLocaleDateString(),'yyyy-MM-dd')}</p>
    //         <p>Committee: {employee.committee}</p>
    //         <p>Department: {employee.department}</p>
    //         <p>Unit: {employee.unit}</p>
    //         <Image className="mt-4" src={employee.qrCode} alt={`${employee.userName} QR Code`} width="200" height="200" />
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    // </>

    
  );
};

export default EmployeesPage;
