import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios,{ AxiosError } from 'axios';


export interface CreateUserPayload {
 
  committee: string;
  department: string;
  unit: string;


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




  export const generateQRCodesPost = createAsyncThunk(
    "generateQRCodesPost",
    async (formData: FormData, { signal, rejectWithValue }) => {

        console.log("generateQRCodesPost",formData.get("committee"));
        console.log("department",formData.get("department"));
        console.log("unit",formData.get("unit"));

      const controller = new AbortController();
      signal.addEventListener("abort", () => controller.abort());
  
      try {
        const response = await axios.post("http://localhost:3000/api/generateQRcode", formData, {

           
           

          signal: controller.signal,
          headers: {
            "Content-Type": "multipart/form-data", // Required to handle file uploads
          },
        });

        console.log("generateQRCodesPost",formData.get("committee"));

        return response.data;
      } catch (error) {
        if (axios.isCancel(error)) {
          return rejectWithValue("Request cancelled");
        }
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data?.message || "Failed to create user");
        }
        return rejectWithValue("An unexpected error occurred");
      }
    }
  );
  

  
// Slice definition
const generateQRCodesSlice = createSlice({
    name: 'generateQRCodes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(generateQRCodesPost.pending, (state) => {
          state.loading = true;
          state.error = null; // Clear previous errors
        })
        .addCase(generateQRCodesPost.fulfilled, (state, action: PayloadAction<CreateUserPayload>) => {
          state.loading = false;
          state.data = action.payload; // Store successful payload in `data`
        })
        .addCase(generateQRCodesPost.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string; // Set error message from `rejectWithValue`
        });
    },
  });
  
  export default generateQRCodesSlice.reducer;


