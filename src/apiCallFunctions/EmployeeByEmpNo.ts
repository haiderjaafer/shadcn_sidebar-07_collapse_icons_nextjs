
type Deduction = {
  id: number;
  EMP_NO: string;
  DED_NO: string;
  DEDCAL: string;
  deddifcal: string;
  DEDBAL: string | null;
  dedprevdifcal: string;
};


export type EmployeeSalarySheetData = {
    EMP_NO: string;
    namefull_emp_name: string;
    YEAR_NO: string;
    MONTH_NO: string;
    CIVIL_NO: string;
    ACTIVE: string;
    cal_centre_code: string;
    INCRDIF: string;
    CALSAL: string;
    PAIDSAL: string;
    sgrade: string;
    GradeStep: string;
    GRSDED: string;
    LSTRND: string;
    NXTRND: string;
    GRSALW: string;
    abs_days: string;
    JobGrade: string;
    CERT_NM: string;
    JOB_NM: string;
    ORGSAL: string | null;
    POST_NM: string | null;
    QRCode:string | null;
    deductions: Deduction[];
  };
  


export async function getEmployeeByEmpNo(empNo: string): Promise<EmployeeSalarySheetData> {

    
    const response = await fetch(`http://localhost:3000/api/employee_salary_sheet/employees?empNo=${empNo}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch employee data");
    }
  
    const data: EmployeeSalarySheetData = await response.json(); // Ensure the data matches the type
    return data;
  }

// export async function getEmployeeByEmpNo(empNo:string): Promise<string> {

// const emp = "008049"

//     const response = await fetch(`http://localhost:3000/api/employee_salary_sheet/employees?empNo=${emp}`);

//   if (!response.ok) {
//     throw new Error("Failed to fetch articles");
//   }

//   return response.json();
//   }
  
 
  