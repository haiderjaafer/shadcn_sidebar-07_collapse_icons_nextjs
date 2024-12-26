import { DataTable } from "@/components/tanStackDataTable";
import { columns, Employee } from "@/components/tanStackDataTable/columns";
import { projects } from "@/components/tanStackDataTable/data";
import { getAllUsers } from "@/lib/data";


interface EmployeesTableServerProps {
  empNo: string;
  
}



const UsersTanstackTableServer = async ({
  empNo,
  
}: EmployeesTableServerProps) => {
  const employees = await getAllUsers(empNo);

  console.log("users", employees);

  const transformedEmployees = employees.map((employee) => ({
    ...employee,
    employeeHireDate: employee.employeeHireDate.toISOString(), // Convert Date to ISO string
    department: employee.department.toString(), // Ensure department is string
    unit: employee.unit.toString(), // Ensure unit is string
  }));

  return (
    <div className="flex flex-col w-full gap-10 ">
      <DataTable<Employee, unknown> data={transformedEmployees} columns={columns} />
    </div>
  );
};

export default UsersTanstackTableServer;