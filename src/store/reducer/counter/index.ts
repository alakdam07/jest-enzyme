import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  "name": `counter`,
  "initialState": 1 as number,
  "reducers": {
    "increment": (state) => state + 1,
    "decrement": (state) => state - 1
  }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
