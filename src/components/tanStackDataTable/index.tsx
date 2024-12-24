"use client";
import React, { useState } from "react";
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

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

//import TableTabs from "./Tabs";
import TableHeader from "./TableHeader";
import { Employee } from "./columns";
import ShowQrCodeDialog from "./operations/ShowQrCodeDialog";
import { UpdateEmployeeSheet } from "./operations/UpdateEmployeeSheet ";
//import { TableFooter } from "./Footer";

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

  return (
    <div className="flex flex-col pb-10" dir="rtl">
      {/* <TableTabs /> */}
      <div className="rounded-md border relative">
        
      <Table>
  <TableHeader table={table} />
  <TableBody>
    {table.getRowModel().rows?.length ? (
      table.getRowModel().rows.map((row) => (
        <TableRow
          key={row.id}
          data-state={row.getIsSelected() && "selected"}
        >
          {row.getVisibleCells().map((cell) => {
            const employee = row.original; // Access the row's data
            
          //  Custom rendering for QR code column
            // if (cell.column.id === "qrCode") {
            //   return (
            //     <TableCell key={cell.id}>
            //       {employee.qrCode ? (
            //         <Image
            //           src={employee.qrCode}
            //           alt={`${employee.userName} QR Code`}
            //           width={50}
            //           height={50}
            //           className="mt-2 mx-auto my-auto cursor-pointer"
            //           onClick={() => {
            //             setSelectedEmployee(employee);
            //             setIsQrDialogOpen(true);
            //           }}
            //         />
            //       ) : (
            //         <span className="text-gray-500">No QR Code</span>
            //       )}
            //     </TableCell>
            //   );
            // }

            // Render all other cells as usual
            return (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            );
          })}
        </TableRow>
      ))
    ) : (
      <TableRow>
        <TableCell
          colSpan={columns.length}
          className="h-24 text-center"
        >
          No results.
        </TableCell>
      </TableRow>
    )}
  </TableBody>
</Table>


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

   
      </div>
      {/* <TableFooter table={table} /> */}
    </div>
  );
}
