import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios,{ AxiosError } from 'axios';


interface CreateUserPayload {
  userName: string;
  comcommittee: number;
  department: number;
  unit: number;
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

// Async thunk for posting user data
export const postUser = createAsyncThunk(
    'user/postUser',
    async (payload: CreateUserPayload, { signal, rejectWithValue }) => {
      const controller = new AbortController();
      signal.addEventListener('abort', () => controller.abort());
  
      try {
        const response = await axios.post(
          'http://localhost:3000/api/users/add-users',
          payload,
          { signal: controller.signal } // Pass the signal to Axios
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