"use client"

import { SearchBar } from "@/components/searchParamsExample/searchbar";
import { getAllEmployees } from "@/lib/data";

import { Fragment, useState } from "react";
import Image from 'next/image';
import { format } from "date-fns";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Ellipsis } from "lucide-react";
import { UpdateEmployeeSheet } from "./operations/UpdateEmployeeSheet ";
import ShowQrCodeDialog from "./operations/ShowQrCodeDialog";

interface Employee {
  id: number;
  empNo: string;
  userName: string;
  employeeHireDate: Date;
  comcommittee: number; // Use 'committee' instead of 'comcommittee'
  department: number;
  unit: number;
  qrCode: string | null;
}



interface EmployeesTableClientProps {
  employees: Employee[];
}

export const EmployeesTableClient = ({ employees }: EmployeesTableClientProps) => {

  const [rowAction, setRowAction] = useState<{ type: string; row: Employee } | null>(null);

  const [isQrDialogOpen, setIsQrDialogOpen] = useState(false);

  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

   // Simulated function to open the UpdateEmployeeSheet
   const handleRowAction = (row: any) => {
    setRowAction({
      type: "update",
      row,
    })
  }


  return (
    <div className="max-w-screen-2xl   mx-auto" dir="rtl">
    <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-700 bg-gray-800">
      <table className="w-full border-collapse text-white">
        {/* Table Head */}
        <thead className="hidden lg:table-header-group">
          <tr>
            <th className="p-4 bg-gray-900 text-center uppercase  text-lg font-extrabold">اسم المستخدم</th>
            <th className="p-4 bg-gray-900 text-center uppercase  text-lg font-extrabold ">رقم الموظف</th>
            <th className="p-4 bg-gray-900 text-center uppercase  text-lg font-extrabold">تاريخ التعيين</th>
            <th className="p-4 bg-gray-900 text-center uppercase  text-lg font-extrabold">اللجنة</th>
            <th className="p-4 bg-gray-900 text-center uppercase  text-lg font-extrabold">القسم</th>
            <th className="p-4 bg-gray-900 text-center uppercase  text-lg font-extrabold">الوحدة</th>
            <th className="p-4 bg-gray-900 text-center uppercase  text-lg font-extrabold">رمز الاستجابة</th>
            <th className="p-4 bg-gray-900 text-center uppercase  text-lg font-extrabold">الإجراء</th>
          </tr>
        </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={employee.empNo}
                className={`block border-b border-gray-700 lg:table-row ${
                  index % 2 === 0 ? "bg-gray-500" : "bg-gray-900"
                }`}
              >
                <td className="block lg:table-cell p-4 text-center">{employee.userName}</td>
                <td className="block lg:table-cell p-4 text-center">{employee.empNo}</td>
                <td className="block lg:table-cell p-4 text-center">
                  {format(new Date(employee.employeeHireDate), "yyyy-MM-dd")}
                </td>
                <td className="block lg:table-cell p-4 text-center">{employee.comcommittee}</td>
                <td className="block lg:table-cell p-4 text-center">{employee.department}</td>
                <td className="block lg:table-cell p-4 text-center">{employee.unit}</td>
                <td className="block lg:table-cell p-4 text-center">
                  {employee.qrCode ? (
                    <Image
                      src={employee.qrCode}
                      alt={`${employee.userName} QR Code`}
                      width={50}
                      height={50}
                      className="mt-2 mx-auto my-auto cursor-pointer "
                      onClick={() => { 

                        setSelectedEmployee(employee);
      
                        setIsQrDialogOpen(true)
                      
                       } } // Open dialog on image click
                    />
                  ) : (
                    <span className="text-gray-500">No QR Code</span>
                  )}
                </td>
                <td className="block lg:table-cell p-4 text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button>
                        <Ellipsis className="h-6 w-6 text-white cursor-pointer mx-auto lg:mx-0" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-gray-900 text-white">
                      <DropdownMenuItem
                        onClick={() =>
                          setRowAction({
                            type: "update",
                            row: employee,
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
          qrCodeUrl={selectedEmployee.qrCode??""}
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

