

import { SearchBar } from "@/components/searchParamsExample/searchbar";
import { getAllEmployees } from "@/lib/data";
import { Employee } from "@/store/slices/employeesQRCodeSlice";
import { Fragment } from "react";
import Image from 'next/image';
import { format } from "date-fns";


export const EmployeesTable = async ({ empNo, currentPage, }: {  empNo: string;  currentPage: number; }) => {


    const Employees = await getAllEmployees(empNo, currentPage);

    console.log( "Employees" ,Employees);
  
    return (


        <div className="max-w-screen-x2 mx-auto px-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Responsive Table</h1>
      
      
      
      
    
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-700 bg-gray-800">
          <table className="w-full border-collapse text-white">
            {/* Table Head - Visible Only on lg and Above */}
            <thead className="hidden lg:table-header-group">
              <tr>
                <th className="p-4 bg-gray-900 text-center uppercase font-bold">User Name</th>
                <th className="p-4 bg-gray-900 text-center uppercase font-bold">Employee Number</th>
                <th className="p-4 bg-gray-900 text-center uppercase font-bold">Hire Date</th>
                <th className="p-4 bg-gray-900 text-center uppercase font-bold">Committee</th>
                <th className="p-4 bg-gray-900 text-center uppercase font-bold">Department</th>
                <th className="p-4 bg-gray-900 text-center uppercase font-bold">Unit</th>
                <th className="p-4 bg-gray-900 text-center uppercase font-bold">QR Code</th>
                <th className="p-4 bg-gray-900 text-left uppercase font-bold">Operation</th>
              </tr>
            </thead>
      
            <tbody>
      
           
      
              {Employees.map((employee, index) => (
                
              
      
     
            //     <tr key={employee.id} className="bg-white border-b">
            //     <td className="py-3 px-6">{index + 1}</td>
            //     <td className="py-3 px-6">{employee.empNo}</td>
            //     <td className="py-3 px-6">{employee.userName}</td>
              
              
            //   </tr>

            <Fragment key={employee.empNo}>

            <tr
                        key={index}
                        className={`block border-b border-gray-700 lg:table-row relative ${
                          index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                        }`}
                      >
                        {/* Data for Small and Medium Screens (sm and md) */}
                        <td className="block lg:table-cell p-4">
                          <div className="flex justify-between">
                            {/* <span className="font-bold uppercase text-gray-400">User Name:</span> */}
                            <span className="ml-2">{employee.userName}</span>
                          </div>
                        </td>
            
                        <td className="block lg:table-cell p-4">
                          <div className="flex justify-between">
                            {/* <span className="font-bold uppercase text-gray-400">Employee Number:</span> */}
                            <span className="ml-2">{employee.empNo}</span>
                          </div>
                        </td>
            
                        <td className="block lg:table-cell p-4">
                          <div className="flex justify-between">
                            {/* <span className="font-bold uppercase text-gray-400">Hire Date:</span> */}
                            <span className="ml-2">{format(new Date(employee.employeeHireDate), 'yyyy-MM-dd')}</span>
                          </div>
                        </td>
            
                        <td className="block lg:table-cell p-4">
                          <div className="flex justify-between">
                            {/* <span className="font-bold uppercase text-gray-400">Committee:</span> */}
                            <span className="ml-2">{employee.comcommittee}</span>
                          </div>
                        </td>
            
                        <td className="block lg:table-cell p-4">
                          <div className="flex justify-between">
                            {/* <span className="font-bold uppercase text-gray-400">Department:</span> */}
                            <span className="ml-2">{employee.department}</span>
                          </div>
                        </td>
            
                        <td className="block lg:table-cell p-4">
                          <div className="flex justify-between">
                            {/* <span className="font-bold uppercase text-gray-400">Unit:</span> */}
                            <span className="ml-2">{employee.unit}</span>
                          </div>
                        </td>
            
                        <td className="block lg:table-cell p-1 text-center ">
                          <Image
                            src={employee.qrCode?? ""} 
                            alt={`${employee.userName} QR Code`}
                            width={50}
                            height={50}
                            className="mt-2 mx-auto my-auto lg:mx-0 cursor-pointer"
                            // onClick={() => { 
            
                            //   setSelectedEmployee(employee);
            
                            //   setIsQrDialogOpen(true)
                            
                            //  } } // Open dialog on image click
                          />
                        </td>
            
                    
                 
            
            
            
                      </tr>
             
            
            
            
                     </Fragment>
      
      
      
              
      
       
      
              ))}
      
       
            </tbody>
          </table>
      
      
        </div>
      
       
      </div>

    )


}

