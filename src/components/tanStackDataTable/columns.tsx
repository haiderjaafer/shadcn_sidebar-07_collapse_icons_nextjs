"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import { Project } from "./data";
import { SortableHeader } from "./SortableHeader";
import ProjectName from "./ProjectName";
import ProjectManager from "./ProjectManager";
import ProjectStatus from "./ProjectStatus";
import ProjectLastUpdate from "./ProjectLastUpdate";
import ProjectResources from "./ProjectResources";
import ProjectTimeLine from "./ProjectTimeLine";
import { ProjectActions } from "./ProjectActions";
import { format } from "date-fns";
import { Ellipsis } from "lucide-react";
import { Button } from "../ui/button";


export interface Employee {
  userName: string;
  empNo: string;
  employeeHireDate: string; // ISO string
  comcommittee: number;
  department: string;
  unit: string;
  qrCode: string;
}


function formatCurrency(amount: number) {
  if (amount >= 1000) {
    return `US$ ${(amount / 1000).toFixed(1)}k`;
  }
  return `US$ ${amount}`;
}


export const columns: ColumnDef<Employee>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="border-border bg-white shadow-lg border data-[state=checked]:border-0 m-4"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border-border bg-white shadow-lg border data-[state=checked]:border-0"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // {
  //   accessorKey: "id",
  //   header: ({ column }) => (
  //     <SortableHeader column={column} title="#" className="w-[50px]" />
  //   ),
  //   cell: ({ row }) => <div className="w-[50px]">{row.getValue("id")}</div>,
  //   enableSorting: true,
  // },
  {
    accessorKey: "userName",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="اسم المستخدم" className="font-extrabold text-center "  />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:text-blue-500"
      >
        <SortableHeader column={column} title="اسم المستخدم" className="font-extrabold text-center "  />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("userName")}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "empNo",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:text-blue-500"
      >
        <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("empNo")}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "employeeHireDate",
    header: ({ column }) => (
      <SortableHeader column={column} title="تاريخ التعيين"  className="font-extrabold text-center "/>
    ),
    cell: ({ row }) => (
      <div>
        {row.getValue("employeeHireDate")
          ? format(new Date(row.getValue("employeeHireDate")), "yyyy-MM-dd")
          : "N/A"}
      </div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "comcommittee", // or "comcommittee" if not transformed


     header: ({ column }) => (
      <SortableHeader column={column} title="الهيأة"  className="font-extrabold text-center "/>
    ),
    cell: ({ row }) => <div>{row.getValue("comcommittee")}</div>, // or "comcommittee"
    enableSorting:false
  },
  {
    accessorKey: "department",

      header: ({ column }) => (
      <SortableHeader column={column} title="القسم"  className="font-extrabold text-center "/>
    ),
    cell: ({ row }) => <div>{row.getValue("department")}</div>,
    enableSorting:false
  },

  {
    accessorKey: "unit",
    header: ({ column }) => (
      <SortableHeader column={column} title="الوحدة"  className="font-extrabold text-center "/>
    ),
    cell: ({ row }) => <div>{row.getValue("unit")}</div>,
    enableSorting:false
  },
  {
    accessorKey: "qrCode",
    header: ({ column }) => (
      <SortableHeader column={column} title="رمز الاستجابة"  className="font-extrabold text-center "/>
       
    ),
    cell: ({ row }) => (
      <img
        src={row.getValue("qrCode")}
        alt="QR Code"
        className="w-16 h-16 object-cover"
      />
    ),
    enableSorting:false
  },
  {
    id: "actions",
    header: ({ column }) => (
      <SortableHeader column={column} title="الاعمال"  className="font-extrabold text-center "/>
     
    ),
    enableSorting:false,
    cell: ({ row }) => {
      const employee = row.original as Employee; // Ensure type safety
      return (
        <div className="text-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <Ellipsis className="h-6 w-6 text-gray-500 hover:text-gray-900" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-900 text-white">
              <DropdownMenuItem
                 onClick={() => handleUpdate(employee)}
                  
                className="cursor-pointer"
              >
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleDelete(employee)}
                className="cursor-pointer text-red-500"
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

const handleDelete = (employee: Employee) => {
  // Example: Show a confirmation dialog
  if (confirm(`Are you sure you want to delete ${employee.userName}?`)) {
    // Perform delete operation here
    console.log("Deleting employee:", employee);
  }
};


const handleUpdate = (employee: Employee ) => {
  // Set the rowAction to trigger the update sheet
  // setRowAction({
//    type: "update",
    
    if (confirm(`Are you sure you want to update ${employee.userName}?`)) {
      // Perform updating operation here
      console.log("updating employee:", employee);
    }

  //});
};



const handleHeaderClick = (columnId: string) => {
 
  // if (confirm(`Are you sure you want to update field ${columnId}?`)) {
  //   // Perform pass operation here
  //   console.log("updating employee:", columnId);
  // }
};

