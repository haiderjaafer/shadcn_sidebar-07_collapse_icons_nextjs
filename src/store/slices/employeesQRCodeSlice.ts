import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// types/Employee.ts
export interface Employee {
    userName: string;
    empNo: string;
    employeeHireDate: string; // ISO string
    committee: string;
    department: string;
    unit: string;
    qrCode: string;
  }
  

interface EmployeesQRCodeState {
    employees: Employee[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: EmployeesQRCodeState = {
    employees: [],
    loading: false,
    error: null,
  };

// Async thunk for fetching employees
export const fetchEmployees = createAsyncThunk<Employee[], { committee: string; department: string; unit: string }>(
    "employees/fetchEmployees",
    async ({ committee, department, unit }: { committee: string; department: string; unit: string }) => {

      const response = await axios.get<{ employee: { user: Employee }[] }>(
        `/api/getAllQRcodes?committee=${committee}&department=${department}&unit=${unit}` );
        
      console.log("API Response:", response.data); // Check if employees array is returned
  
      // Extract user objects from the API response
      const employees = response.data.employee.map(item => item.user);
      console.log("API employees:", employees);
      return employees;
    }
  );
  

// Employees slice
const employeesQRCodeSlice = createSlice({
    name: 'employeesQRCode',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchEmployees.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchEmployees.fulfilled, (state, action: PayloadAction<Employee[]>) => {
          state.loading = false;
          state.employees = action.payload; // Store the extracted employees
          console.log("Fulfilled Action Payload:", action.payload);
        })
        .addCase(fetchEmployees.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to fetch employees';
        });
    },
  });
  

export default employeesQRCodeSlice.reducer;
