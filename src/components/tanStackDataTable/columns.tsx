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
import { EmployeeSalarySheetData } from "@/apiCallFunctions/EmployeeByEmpNo";


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


export const columns: ColumnDef<EmployeeSalarySheetData>[] = [
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
    accessorKey: "namefull_emp_name",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="اسم المستخدم" className="font-extrabold text-center "  />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:text-blue-500 hover:bg-black "
      >
        <SortableHeader column={column} title="اسم الموظف" className="font-extrabold text-center text-white  text-xl "  />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("namefull_emp_name")}</div>,
    enableSorting: false,
  },


  {
    accessorKey: "EMP_NO",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="رقم الحاسبة" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("EMP_NO")}</div>,
    enableSorting: false,
  },


  
  {
    accessorKey: "YEAR_NO",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="السنة" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("YEAR_NO")}</div>,
    enableSorting: false,
  },


  
  {
    accessorKey: "MONTH_NO",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="الشهر" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("MONTH_NO")}</div>,
    enableSorting: false,
  },

  
  {
    accessorKey: "CIVIL_NO",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="الرقم المدني" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("CIVIL_NO")}</div>,
    enableSorting: false,
  },


  
  {
    accessorKey: "ACTIVE",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="حالة الموظف" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("ACTIVE")}</div>,
    enableSorting: false,
  },

  {
    accessorKey: "cal_centre_code",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="مركز الكلفة" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("cal_centre_code")}</div>,
    enableSorting: false,
  },

  {
    accessorKey: "INCRDIF",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="INCRDIF" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("INCRDIF")}</div>,
    enableSorting: false,
  },
  

  {
    accessorKey: "CALSAL",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="CALSAL" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("CALSAL")}</div>,
    enableSorting: false,
  },

  {
    accessorKey: "PAIDSAL",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="PAIDSAL" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("PAIDSAL")}</div>,
    enableSorting: false,
  },


  {
    accessorKey: "sgrade",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="sgrade" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("sgrade")}</div>,
    enableSorting: false,
  },



  {
    accessorKey: "GradeStep",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="GradeStep" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("GradeStep")}</div>,
    enableSorting: false,
  },


  {
    accessorKey: "GRSDED",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="GRSDED" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("GRSDED")}</div>,
    enableSorting: false,
  },


  {
    accessorKey: "LSTRND",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="LSTRND" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("LSTRND")}</div>,
    enableSorting: false,
  },

  {
    accessorKey: "NXTRND",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="NXTRND" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("NXTRND")}</div>,
    enableSorting: false,
  },


  {
    accessorKey: "GRSALW",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="GRSALW" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("GRSALW")}</div>,
    enableSorting: false,
  },



  {
    accessorKey: "abs_days",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="ايام الغياب" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("abs_days")}</div>,
    enableSorting: false,
  },

  {
    accessorKey: "JobGrade",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="الدرجة" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("JobGrade")}</div>,
    enableSorting: false,
  },


  {
    accessorKey: "CERT_NM",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="الشهادة" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("CERT_NM")}</div>,
    enableSorting: false,
  },


  {
    accessorKey: "JOB_NM",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="العنوان الوظيفي" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("JOB_NM")}</div>,
    enableSorting: false,
  },


  {
    accessorKey: "ORGSAL",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="الراتب الاسمي" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("ORGSAL")}</div>,
    enableSorting: false,
  },

  {
    accessorKey: "POST_NM",
    // header: ({ column }) => (
    //   <SortableHeader column={column} title="رقم الموظف" className="font-extrabold text-center " />
    // ),

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => handleHeaderClick(column.id)}
        className="text-left hover:bg-black"
      >
        <SortableHeader column={column} title="POST_NM" className="font-extrabold text-center text-lg text-white "  />
      </Button>
    ),

    cell: ({ row }) => <div>{row.getValue("POST_NM")}</div>,
    enableSorting: false,
  },




  // {
  //   id: "deductions",
  //   header: "Deductions",
  //   cell: ({ row }) => (
  //     <div>
  //       {row.original.deductions.map((deduction) => (
  //         <div key={deduction.id} className="border-b py-2">
  //           <p>
  //             <strong>DED_NO:</strong> {deduction.DED_NO}
  //           </p>
  //           <p>
  //             <strong>DEDCAL:</strong> {deduction.DEDCAL}
  //           </p>
  //           <p>
  //             <strong>DEDBAL:</strong> {deduction.DEDBAL || "N/A"}
  //           </p>
  //         </div>
  //       ))}
  //     </div>
  //   ),
  // },

  


  
  


  {
    accessorKey: "employeeHireDate",
    header: ({ column }) => (
      
      <Button
      asChild
      variant="ghost"
      onClick={() => handleHeaderClick(column.id)}
      className="text-left hover:bg-black "
    >
      <SortableHeader column={column} title="تاريخ التعيين"  className="font-extrabold text-center  "/>
    </Button>
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
      <SortableHeader column={column} title="الهيأة"  className="font-extrabold text-center text-lg hover:bg-black text-white "/>
    ),
    cell: ({ row }) => <div>{row.getValue("comcommittee")}</div>, // or "comcommittee"
    enableSorting:false
  },





  {
    accessorKey: "department",

      header: ({ column }) => (
      <SortableHeader column={column} title="القسم"  className="font-extrabold text-center text-lg hover:bg-black text-white "/>
    ),
    cell: ({ row }) => <div>{row.getValue("department")}</div>,
    enableSorting:false
  },




  {
    accessorKey: "unit",
    header: ({ column }) => (
      <SortableHeader column={column} title="الوحدة"  className="font-extrabold text-center text-lg hover:bg-black text-white "/>
    ),
    cell: ({ row }) => <div>{row.getValue("unit")}</div>,
    enableSorting:false
  },







  {
    accessorKey: "QRCode",
    header: ({ column }) => (
      <SortableHeader column={column} title="رمز الاستجابة"  className="font-extrabold text-center text-lg hover:bg-black text-white "/>
       
    ),
    cell: ({ row }) => (
      <img
        src={row.getValue("QRCode")}
        alt="QR Code"
        className="w-16 h-16 object-cover"
      />
    ),
    enableSorting:false
  },






  // {
  //   id: "actions",
  //   header: ({ column }) => (
  //     <SortableHeader column={column} title="الاعمال"  className="font-extrabold text-center text-lg hover:bg-black text-white "/>
     
  //   ),
  //   enableSorting:false,
  //   cell: ({ row }) => {
  //     const employee = row.original as EmployeeSalarySheetData; // Ensure type safety
  //     return (
  //       <div className="text-center">
  //         <DropdownMenu>
  //           <DropdownMenuTrigger asChild>
  //             <button>
  //               <Ellipsis className="h-6 w-6 text-gray-500 hover:text-gray-900" />
  //             </button>
  //           </DropdownMenuTrigger>
  //           <DropdownMenuContent align="end" className="bg-gray-900 text-white">
  //             <DropdownMenuItem
  //                onClick={() => handleUpdate(employee)}
                  
  //               className="cursor-pointer"
  //             >
  //               Edit
  //             </DropdownMenuItem>
  //             <DropdownMenuItem
  //               onClick={() => handleDelete(employee)}
  //               className="cursor-pointer text-red-500"
  //             >
  //               Delete
  //             </DropdownMenuItem>
  //           </DropdownMenuContent>
  //         </DropdownMenu>
  //       </div>
  //     );
  //   },
  // },
];

const handleDelete = (employee: EmployeeSalarySheetData) => {
  // Example: Show a confirmation dialog
  if (confirm(`Are you sure you want to delete ${employee.namefull_emp_name}?`)) {
    // Perform delete operation here
    console.log("Deleting employee:", employee);
  }
};


const handleUpdate = (employee: EmployeeSalarySheetData ) => {
  // Set the rowAction to trigger the update sheet
  // setRowAction({
//    type: "update",
    
    if (confirm(`Are you sure you want to update ${employee.namefull_emp_name}?`)) {
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

