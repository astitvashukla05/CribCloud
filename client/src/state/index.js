import { createSlice } from "@reduxjs/toolkit";

export const initialState = {};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
});

// Export actions (currently empty)
export const {} = globalSlice.actions;

// Export reducer
export default globalSlice.reducer;
