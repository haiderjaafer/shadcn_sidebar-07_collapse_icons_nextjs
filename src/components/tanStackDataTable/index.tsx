"use client";
import React, { useMemo, useState } from "react";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getPaginationRowModel,
  PaginationState,
} from "@tanstack/react-table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
//import TableTabs from "./Tabs";
// import TableHeader from "./TableHeader";
import { Employee } from "./columns";
import ShowQrCodeDialog from "./operations/ShowQrCodeDialog";
import { UpdateEmployeeSheet } from "./operations/UpdateEmployeeSheet ";
import { Ellipsis } from "lucide-react";
//import { TableFooter } from "./Footer";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import TableHeader from "./table_header";
import Search from "../EmployeeTable/SearchQueryParams";
import { format } from "date-fns";
import { EmployeeSalarySheetData } from "@/apiCallFunctions/EmployeeByEmpNo";
import { getActiveStatusDescription } from "./getActiveStatusDescription";
import { getArabicMonthName } from "./mappingArabicMonthName";
import { getJobGradeInArabic } from "./mappingJobGradeInArabic";


export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeSalarySheetData | null>(null);
  const [rowAction, setRowAction] = useState<{ type: string; row: EmployeeSalarySheetData } | null>(null);
  const [isQrDialogOpen, setIsQrDialogOpen] = useState(false);


  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeColumn, setActiveColumn] = useState<string | null>(null);

  const handleHeaderClick = (columnId: string) => {
    if (columnId === "userName") {
      // Only allow searching for the 'userName' column
      if (confirm(`Are you sure you want to search on the column: ${columnId}?`)) {
        setActiveColumn(columnId); // Set the active column
        setDialogOpen(true); // Open the dialog
      }
    } if (columnId === "empNo") {
      // Alert for other columns
      alert(`Are you sure you want to search on the column: ${columnId}`);
      setActiveColumn(columnId); // Set the active column
      setDialogOpen(true); // Open the dialog
    }
  };
  
  

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      rowSelection,
      sorting,
    },
    initialState: {
      pagination: {
        pageSize: 20,
        pageIndex: 0,
      },
    },
  });

  console.log("sorting", table.getState().sorting);

  
  const handleUpdate = (employee: EmployeeSalarySheetData) => {
    // Set the rowAction to open the update sheet
    setRowAction({
      type: "update",
      row: employee,
    });

    console.log("employee",employee);
  };


  const handleUpdateClose = () => {
    setRowAction(null); // Reset the state to close the sheet
  };




  return (
    <div className="flex flex-col my-1" dir="rtl">
      <div className="my-0 m-auto">
        <label className="font-extrabold text-2xl">
          صفحة معلومات الموظفيين ورموز الاستجابة
        </label>
      </div>
  
      <div className="rounded-md border relative mb-0">
        {/* Table for larger screens */}
        <div className="hidden lg:block">
          <Table>
            <TableHeader table={table} onHeaderClick={handleHeaderClick} />
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, index) => (
                  <TableRow
                    key={`${row.id}_${index}`}
                    className={`block border-b border-gray-700 lg:table-row ${
                      index % 2 === 0 ? "bg-gray-500" : "bg-gray-600"
                    }`}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => {
                      const employee = row.original as EmployeeSalarySheetData;
  
                      // Custom rendering for QR code column
                      if (cell.column.id === "QRCode") {
                        return (
                          <TableCell key={cell.id}>
                            {employee.QRCode ? (
                              <Image
                                src={employee.QRCode}
                                alt={`${employee.namefull_emp_name} QR Code`}
                                width={50}
                                height={50}
                                className="mt-2 mx-auto my-auto cursor-pointer"
                                onClick={() => {
                                  setSelectedEmployee(employee);
                                  setIsQrDialogOpen(true);
                                }}
                              />
                            ) : (
                              <span className="text-gray-500">No QR Code</span>
                            )}
                          </TableCell>
                        );
                      }
  
                      // Custom rendering for ACTIVE column
                      if (cell.column.id === "ACTIVE") {
                        return (
                          <TableCell key={cell.id}>
                            <span className="flex justify-center">
                              {getActiveStatusDescription(employee.ACTIVE)}
                            </span>
                          </TableCell>
                        );
                      }
  
                      // Custom rendering for actions column
                      if (cell.column.id === "actions") {
                        return (
                          <TableCell key={cell.id}>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <button>
                                  <Ellipsis className="h-6 w-6 text-white hover:text-gray-900" />
                                </button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                className="bg-gray-900 text-white "
                              >
                                <DropdownMenuItem
                                  onClick={() => handleUpdate(employee)}
                                  className="cursor-pointer text-lg"
                                >
                                  <div className="flex items-center m-auto">
                                    <div className="">تعديل</div>
                                    <div>icon</div>
                                  </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => alert("Delete clicked")}
                                  className="cursor-pointer text-red-500"
                                >
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        );
                      }
  
                      // Render all other cells as usual
                      return (
                        <TableCell className="text-center" key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
  
      {/* Vertical layout for smaller screens */}
      <div className="block lg:hidden">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => {
              const employee = row.original as EmployeeSalarySheetData;
              return (
                <div
                  key={row.id}
                  className={`p-4 border rounded-lg mb-4 ${
                    index % 2 === 0 ? "bg-gray-500" : "bg-gray-600"
                  }`}
                >
                  {/* Display only relevant fields */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <span className="font-extrabold text-xl  text-gray-300">اسم الموظف :</span>
                      <span className="text-gray-100 font-extrabold text-xl">{employee.namefull_emp_name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-extrabold text-xl text-gray-300">رقم الحاسبة :</span>
                      <span className="text-gray-100 font-extrabold text-xl">{parseInt(employee.EMP_NO, 10)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="font-extrabold text-xl text-gray-300"> الراتب الاسمي:</span>
                      <span className="text-gray-100 font-extrabold text-xl">{employee.ORGSAL}</span>
                    </div>

                   

                    <div className="flex justify-between">

                      <span className="font-extrabold text-xl text-gray-300">السنة:</span>
                      <span className="text-gray-100 font-extrabold text-xl">{employee.YEAR_NO}</span>
                    </div>

                    <div className="flex justify-between">
  <span className="font-extrabold text-xl text-gray-300">الشهر:</span>
  <span className="text-gray-100 font-extrabold text-xl">
    {getArabicMonthName(employee.MONTH_NO)}
  </span>
</div>
                   
                   </div>


                       
                   <div className="flex justify-between">
                   <span className="font-semibold text-gray-300"> الراتب الاسمي:</span>
                   <span className="text-gray-100">{employee.ORGSAL}</span>
                    </div>

                       
                      

                 

                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-300">السنة:</span>
                      <span className="text-gray-100">{employee.YEAR_NO}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-300">الشهر:</span>
                      <span className="text-gray-100">{employee.MONTH_NO}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-300">المرحلة:</span>
                      <span className="text-gray-100">{employee.GradeStep}</span>
                    </div>


                    {/* <div className="flex justify-between">
                      <span className="font-semibold text-gray-300">تاريخ التعيين :</span>   
                      <span className="text-gray-100">{format(new Date(employee.employeeHireDate), "yyyy-MM-dd")}</span>
                    </div> */}
                  <div className="flex justify-between">
  <span className="font-extrabold text-xl text-gray-300">حالة الموظف:</span>
  <span className="text-gray-100 font-extrabold text-xl">{getActiveStatusDescription(employee.ACTIVE)}</span>
</div>

                

                    
                  

                    
                    <div className="flex justify-between">
                      <span className="font-extrabold text-xl text-gray-300">الدرجة:</span>
                      <span className="text-gray-100 font-extrabold text-xl">    {getJobGradeInArabic(employee.JobGrade)}
                      </span>
                    </div>

                      
                    <div className="flex justify-between">
                      <span className="font-extrabold text-xl text-gray-300">ايام الغياب:</span>
                      <span className="text-gray-100 font-extrabold text-xl">{employee.abs_days}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="font-extrabold text-xl text-gray-300"> الشهادة:</span>
                      <span className="text-gray-100 font-extrabold text-xl">{employee.CERT_NM}</span>
                    </div>


                    <div className="flex justify-between">
                      <span className="font-extrabold text-xl text-gray-300"> الراتب الكلي:</span>
                      <span className="text-gray-100 font-extrabold text-xl">{employee.GRSDED}</span>
                    </div>

                 


                    {/* <div className="flex justify-between">
                      <span className="font-extrabold text-xl text-gray-300">الرقم المدني:</span>
                      <span className="text-gray-100 font-extrabold text-xl">{employee.CIVIL_NO}</span>
                    </div> */}




                    <div className="flex justify-center">
                      <span className="font-semibold text-gray-100">جدول الاستقطاعات</span>
                      
                    </div>
                    
                    <div className="overflow-x-auto">
  <table className="min-w-full table-auto border-collapse border border-gray-600">
    <thead className="bg-gray-700 text-gray-300">
      <tr>
        <th className="border border-gray-600 px-4 py-2 text-left">#</th>
        {/* <th className="border border-gray-600 px-4 py-2 text-left">DED_NO</th> */}
        <th className="border border-gray-600 px-4 py-2 text-left"> الاستقطاع</th>
        <th className="border border-gray-600 px-4 py-2 text-left">الرصيد</th>
        <th className="border border-gray-600 px-4 py-2 text-left">الفرق</th>
      </tr>
    </thead>
    <tbody>
      {employee.deductions.map((deduction, index) => (
        <tr key={deduction.id} className="even:bg-gray-800 odd:bg-gray-900 text-gray-100">
          <td className="border border-gray-600 px-4 py-2">{index + 1}</td>
          {/* <td className="border border-gray-600 px-4 py-2">{deduction.DED_NO}</td> */}
          <td className="border border-gray-600 px-4 py-2">{deduction.DEDCAL}</td>
          <td className="border border-gray-600 px-4 py-2">{deduction.DEDBAL || "N/A"}</td>
          <td className="border border-gray-600 px-4 py-2">{deduction.deddifcal}</td>
        </tr>
      ))}
    </tbody>

    <tfoot>
      <tr className="bg-gray-800 text-gray-100 font-bold">
        <td className="border border-gray-600 px-4 py-2" colSpan={1} >المجموع</td>
        <td className="border border-gray-600 px-4 py-2" colSpan={2} >
          {employee.deductions.reduce((sum, deduction) => sum + parseFloat(deduction.DEDCAL || "0"), 0).toFixed(2)}
        </td>
        <td className="border border-gray-600 px-4 py-2" colSpan={2} ></td>
      </tr>
    </tfoot>
    
  </table>
</div>

      

                   
<div className="flex justify-between "> 
                    {employee.QRCode ? (
                    <Image
                      src={employee.QRCode}
                      alt={`${employee.namefull_emp_name} QR Code`}
                      width={80}
                      height={80}
                      className=" mx-auto my-auto cursor-pointer "
                      onClick={() => {
                        setSelectedEmployee(employee);
                        setIsQrDialogOpen(false);
                      }}
                    />
                  ) : (
                    <span className="text-gray-500">No QR Code</span>
                  )}

</div>

                  
                  </div>

                  
             
                
              );
            })
          ) : (
            <div className="h-24 text-center">No results.</div>
          )}
        </div>
     

  
      {/* Dialog for QR Code */}
      {selectedEmployee && (
        <ShowQrCodeDialog
          open={isQrDialogOpen}
          onOpenChange={(isOpen: boolean) => {
            if (!isOpen) setSelectedEmployee(null); // Reset selected employee
            setIsQrDialogOpen(isOpen);
          }}
          qrCodeUrl={selectedEmployee?.QRCode ?? ""}
          userName={selectedEmployee?.namefull_emp_name ?? ""}
        />
      )}
    
    
      {/* UpdateEmployeeSheet Component */}
      {rowAction && rowAction.type === "update" && (
        <UpdateEmployeeSheet
          open={rowAction.type === "update"}
          onOpenChange={handleUpdateClose}
          employee={rowAction.row}
        />
      )}
  
      {/* Dialog for Search */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search {activeColumn}</DialogTitle>
          </DialogHeader>
          <div>
            <Search />
            Search or filter data for the column: {activeColumn}
          </div>
        </DialogContent>
      </Dialog>
    
      </div>

  
  




        )       
}




