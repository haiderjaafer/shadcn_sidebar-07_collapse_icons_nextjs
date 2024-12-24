// EmployeesTableServer.tsx
import { getAllEmployees } from "@/lib/data";
import { EmployeesTableClient } from "@/components/EmployeeTable/EmployeesTableClient";

interface EmployeesTableServerProps {
  empNo: string;
  currentPage: number;
}

export const EmployeesTableServer = async ({
  empNo,
  currentPage,
}: EmployeesTableServerProps) => {
  
    const employees = await getAllEmployees(empNo, currentPage);

   

    

  return <EmployeesTableClient employees={employees} />;
};
