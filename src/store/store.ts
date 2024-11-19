import { configureStore } from "@reduxjs/toolkit";
 import counterSlice from "@/store/slices/counterSlices";
// import cartSlice from "./slices/cartSlice";
// import formSlice from "./slices/formSlice";

const store = configureStore({
  reducer: { 
    // here passes slices

    // reducer is a slice
     counter: counterSlice,   // counter here will be accessed via useSelector hook
    // cart: cartSlice,
    // form: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;