'use client';

import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { fetchEmployees } from '@/store/slices/employeesQRCodeSlice';
import Image from 'next/image';
import { Employee } from '@/store/slices/employeesQRCodeSlice';
import { format } from "date-fns";
import { useRouter } from 'next/router';
import { Ellipsis } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { UpdateEmployeeSheet } from './operations/UpdateEmployeeSheet ';
import ShowQrCodeDialog from './operations/ShowQrCodeDialog';



const EmployeesPage = () => {

  // const router = useRouter();
  // const { empNo } = router.query; // Get empNo from query parameters

  // console.log(empNo)

  const [rowAction, setRowAction] = useState<{ type: string; row: any } | null>(null)
  const [isQrDialogOpen, setIsQrDialogOpen] = useState(false);

  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);


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


   // Simulated function to open the UpdateEmployeeSheet
   const handleRowAction = (row: any) => {
    setRowAction({
      type: "update",
      row,
    })
  }


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
        {employees.map((employee: Employee, index) => (
          
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
                <span className="ml-2">{employee.committee}</span>
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
                src={employee.qrCode}
                alt={`${employee.userName} QR Code`}
                width={50}
                height={50}
                className="mt-2 mx-auto my-auto lg:mx-0 cursor-pointer"
                onClick={() => { 

                  setSelectedEmployee(employee);

                  setIsQrDialogOpen(true)
                
                 } } // Open dialog on image click
              />
            </td>

        
            <td className="block lg:table-cell p-4 text-center">
{/* DropdownMenu for Ellipsis */}
<DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button>
                    <Ellipsis
                onClick={() => alert(`Operations for ${employee.userName + employee.empNo}`)}
                className="h-6 w-6 text-white cursor-pointer mx-auto lg:mx-0"
              />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-gray-900 text-white">
                    <DropdownMenuItem
                      onClick={() => 
                        //alert("Edit clicked")

                        setRowAction({
                          type: "update",
                          row: employee, // Pass employee data to the action
                        })


                      }
                      className="cursor-pointer"
                    >
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => alert("Delete clicked")}
                      className="cursor-pointer text-red-500"
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>



          </tr>
 



         </Fragment>

 

        ))}

 
      </tbody>
    </table>

   {/* Render Modal Outside of Table */}
   {selectedEmployee && (
        <ShowQrCodeDialog
          open={isQrDialogOpen}
          onOpenChange={(isOpen:any) => {
            if (!isOpen) setSelectedEmployee(null); // Reset selected employee
            setIsQrDialogOpen(isOpen);
          }}
          qrCodeUrl={selectedEmployee.qrCode}
          userName={selectedEmployee.userName}
        />
      )}

    <div>
      {/* UpdateEmployeeSheet Component */}
      {rowAction && rowAction.type === "update" && (
        <UpdateEmployeeSheet
          open={rowAction.type === "update"} // Open if type is update
          onOpenChange={() => setRowAction(null)} // Close the sheet on dismiss
          employee={rowAction.row} // Pass the selected employee data
        />
      )}
    </div>
  </div>

 
</div>

  
  
  


  


    
  );
};

export default EmployeesPage;
