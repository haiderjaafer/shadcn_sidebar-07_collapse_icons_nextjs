import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios,{ AxiosError } from 'axios';


export interface CreateUserPayload {
  userName: string;
  employeeHireDate: string; // Format: YYYY-MM-DD
  comcommittee: number;
  department: number;
  unit: number;
  employeeNo:string;
  file?: File; // Optional file field

}


interface UserState {
  data: CreateUserPayload | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

interface ApiError {
    message: string;
  }

  export const postUser = createAsyncThunk(
    'user/postUser',
    async (payload: CreateUserPayload, { signal, rejectWithValue }) => {
      const controller = new AbortController();
      signal.addEventListener('abort', () => controller.abort());
  
      try {
        // Construct FormData
        const formData = new FormData();
        formData.append('userName', payload.userName);
        formData.append('employeeHireDate', payload.employeeHireDate);
        formData.append('comcommittee', payload.comcommittee.toString());
        formData.append('department', payload.department.toString());
        formData.append('unit', payload.unit.toString());
        formData.append('employeeNo', payload.employeeNo);
  
        // If a file is included in the payload
        if (payload.file) {
          formData.append('file', payload.file);
        }
  
        const response = await axios.post(
          'http://localhost:3000/api/users/add-users',
          formData,
          {
            signal: controller.signal, // Pass the signal to Axios
            headers: {
              'Content-Type': 'multipart/form-data', // Ensure the correct content type
            },
          }
        );
  
        return response.data;
      } catch (error) {
        if (axios.isCancel(error)) {
          return rejectWithValue('Request cancelled');
        }
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data?.message || 'Failed to create user');
        }
        return rejectWithValue('An unexpected error occurred');
      }
    }
  );
  
// Slice definition
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(postUser.pending, (state) => {
          state.loading = true;
          state.error = null; // Clear previous errors
        })
        .addCase(postUser.fulfilled, (state, action: PayloadAction<CreateUserPayload>) => {
          state.loading = false;
          state.data = action.payload; // Store successful payload in `data`
        })
        .addCase(postUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string; // Set error message from `rejectWithValue`
        });
    },
  });
  
  export default userSlice.reducer;


//   Explanation of thunkAPI in the Context
// thunkAPI.rejectWithValue: Used to reject the async thunk with a custom error payload. This payload will be available in the rejected case of your slice reducer.

// Other properties of thunkAPI:

// dispatch: Allows you to dispatch other actions within the thunk.
// getState: Provides access to the Redux state.
// signal: Used to handle request cancellations.
// extra: Passes additional arguments configured when creating the store.