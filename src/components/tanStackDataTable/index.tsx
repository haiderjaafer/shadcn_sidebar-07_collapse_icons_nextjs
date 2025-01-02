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
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [rowAction, setRowAction] = useState<{ type: string; row: Employee } | null>(null);
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

  
  const handleUpdate = (employee: Employee) => {
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


  
<div className="flex flex-col my-10" dir="rtl">
      <div className="rounded-md border relative">
        {/* Table for larger screens */}
        <div className="hidden lg:block">


        <Table >

<TableHeader table={table} onHeaderClick={handleHeaderClick} />

  <TableBody>
    {table.getRowModel().rows?.length ? (
      table.getRowModel().rows.map((row,index) => (
        <TableRow
          key={row.id}
         
        className={`block border-b border-gray-700 lg:table-row ${
          index % 2 === 0 ? "bg-gray-500" : "bg-gray-600"
        }`}
          data-state={row.getIsSelected() && "selected"}
        >
          {row.getVisibleCells().map((cell) => {
            
            const employee = row.original as Employee; // Assert type

            // Custom rendering for QR code column
            if (cell.column.id === "qrCode") {
              return (
                <TableCell key={cell.id}>
                  {employee.qrCode ? (
                    <Image
                      src={employee.qrCode}
                      alt={`${employee.userName} QR Code`}
                      width={50}
                      height={50}
                      className="mt-2 mx-auto my-auto cursor-pointer "
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
                      className="bg-gray-900 text-white"
                    >
                      <DropdownMenuItem
                        onClick={() => handleUpdate(employee)}
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

        {/* Vertical layout for smaller screens */}
        <div className="block lg:hidden">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => {
              const employee = row.original as Employee;
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
                      <span className="font-semibold text-gray-300">اسم الموظف :</span>
                      <span className="text-gray-100">{employee.userName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-300">رقم الحاسبة :</span>
                      <span className="text-gray-100">{employee.empNo}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-300">تاريخ التعيين :</span>   
                      <span className="text-gray-100">{format(new Date(employee.employeeHireDate), "yyyy-MM-dd")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-300">الهيأة:</span>
                      <span className="text-gray-100">{employee.comcommittee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-300">القسم:</span>
                      <span className="text-gray-100">{employee.department}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-300">الشعبة:</span>
                      <span className="text-gray-100">{employee.unit}</span>
                    </div>

                  
                  </div>

                  {/* Display QR Code (only one per row) */}
                  {employee.qrCode && (
                    <div className="flex justify-center mt-4">
                      <Image
                        src={employee.qrCode}
                        alt={`${employee.userName} QR Code`}
                        width={50}
                        height={50}
                        className="cursor-pointer"
                        onClick={() => {
                          setSelectedEmployee(employee);
                          setIsQrDialogOpen(true);
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="h-24 text-center">No results.</div>
          )}
        </div>
      </div>
      {selectedEmployee && (
          <ShowQrCodeDialog
            open={isQrDialogOpen}
            onOpenChange={(isOpen: boolean) => {
              if (!isOpen) setSelectedEmployee(null); // Reset selected employee
              setIsQrDialogOpen(isOpen);
            }}
            qrCodeUrl={selectedEmployee.qrCode ?? ""}
            userName={selectedEmployee.userName}
          />
        )}

        <div>
             {/* UpdateEmployeeSheet Component */}
      {rowAction && rowAction.type === "update" && (
        <UpdateEmployeeSheet
          open={rowAction.type === "update"} // Open if type is update
          onOpenChange={handleUpdateClose} // Close the sheet on dismiss
          employee={rowAction.row} // Pass the selected employee data
        />
      )}
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search {activeColumn}</DialogTitle>
          </DialogHeader>
          <div>
            <Search/>
            {/* Placeholder: Add search functionality here */}
            Search or filter data for the column: {activeColumn}
          </div>
        </DialogContent>
      </Dialog>
      </div>
   
    

  


  
  );
}







