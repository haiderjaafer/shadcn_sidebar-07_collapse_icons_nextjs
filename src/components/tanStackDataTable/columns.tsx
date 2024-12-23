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



function formatCurrency(amount: number) {
  if (amount >= 1000) {
    return `US$ ${(amount / 1000).toFixed(1)}k`;
  }
  return `US$ ${amount}`;
}

export const columns: ColumnDef<Project>[] = [
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
    accessorKey: "name",
    header: ({ column }) => (
      <SortableHeader column={column} title="اسم المستخدم " />
    ),
    cell: ({ row }) => <ProjectName name={row.getValue("name")} />,
    enableSorting: true,
  },
  {
    accessorKey: "project_manager",
    header: "PM",
    cell: ({ row }) => (
      <ProjectManager name={row.getValue("project_manager")} />
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <ProjectStatus status={row.getValue("status")} />,
  },
  {
    accessorKey: "last_updated",
    header: ({ column }) => (
      <SortableHeader column={column} title="Last updated" />
    ),
    cell: ({ row }) => (
      <ProjectLastUpdate date={row.getValue("last_updated")} />
    ),
    enableSorting: true,
  },
  {
    accessorKey: "resources",
    header: "Resources",
    cell: ({ row }) => (
      <ProjectResources resources={row.getValue("resources")} />
    ),
  },
  {
    accessorKey: "start_date",
    header: "Project timeline",
    cell: ({ row }) => (
      <ProjectTimeLine
        startDate={row.original.start_date}
        endDate={row.original.end_date}
      />
    ),
  },
  {
    accessorKey: "estimated_cost",
    header: ({ column }) => (
      <SortableHeader column={column} title="Estimated cost" />
    ),
    cell: ({ row }) => (
      <p className="text-base">
        {formatCurrency(row.getValue("estimated_cost"))}
      </p>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => <ProjectActions row={row} />,
  },
];
