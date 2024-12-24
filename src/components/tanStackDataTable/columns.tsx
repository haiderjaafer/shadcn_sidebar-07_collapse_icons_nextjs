"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";


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
        className="border-border bg-white shadow-lg border data-[state=checked]:border-0"
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
  {
    accessorKey: "id",
    header: ({ column }) => (
      <SortableHeader column={column} title="#" className="w-[50px]" />
    ),
    cell: ({ row }) => <div className="w-[50px]">{row.getValue("id")}</div>,
    enableSorting: true,
  },
  {
    accessorKey: "userName",
    header: ({ column }) => (
      <SortableHeader column={column} title="اسم المستخدم" />
    ),
    cell: ({ row }) => <div>{row.getValue("userName")}</div>,
    enableSorting: true,
  },
  {
    accessorKey: "empNo",
    header: ({ column }) => (
      <SortableHeader column={column} title="رقم الموظف" />
    ),
    cell: ({ row }) => <div>{row.getValue("empNo")}</div>,
    enableSorting: true,
  },
  {
    accessorKey: "employeeHireDate",
    header: ({ column }) => (
      <SortableHeader column={column} title="تاريخ التعيين" />
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
    header: "اللجنة",
    cell: ({ row }) => <div>{row.getValue("comcommittee")}</div>, // or "comcommittee"
  },
  {
    accessorKey: "department",
    header: "القسم",
    cell: ({ row }) => <div>{row.getValue("department")}</div>,
  },
  {
    accessorKey: "unit",
    header: "الوحدة",
    cell: ({ row }) => <div>{row.getValue("unit")}</div>,
  },
  {
    accessorKey: "qrCode",
    header: "QR Code",
    cell: ({ row }) => (
      <img
        src={row.getValue("qrCode")}
        alt="QR Code"
        className="w-16 h-16 object-cover"
      />
    ),
  },
  {
    accessorKey: "actions",
    header: "الإجراءات",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    ),
  },
];

