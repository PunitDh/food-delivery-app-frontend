import { createSlice } from "@reduxjs/toolkit";

export const itemCartSlice = createSlice({
  name: "cartCounter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = itemCartSlice.actions;

export default itemCartSlice.reducer;
