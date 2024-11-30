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

    <div className="container mx-auto p-4">
         {/* <button
          onClick={() =>
            //Dispatch the action with vote "up"
            dispatch(fetchEmployees({ committee: '6', department: '58', unit: '396' }))
          }
        >
          click
        </button> */}
      <h1 className="text-2xl font-bold mb-4">Employee QR Codes</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {employees.map((employee: Employee, index) => (
          <li className="p-4 border rounded-lg shadow-lg" key={index}>
            <p className="text-lg font-semibold">Employee Name: {employee.userName}</p>
            <p>Emp No: {employee.empNo}</p>
            <p>Hire Date:  { format( new Date(employee.employeeHireDate).toLocaleDateString(),'yyyy-MM-dd')}</p>
            <p>Committee: {employee.committee}</p>
            <p>Department: {employee.department}</p>
            <p>Unit: {employee.unit}</p>
            <Image className="mt-4" src={employee.qrCode} alt={`${employee.userName} QR Code`} width="200" height="200" />
          </li>
        ))}
      </ul>
    </div>


    
  );
};

export default EmployeesPage;
