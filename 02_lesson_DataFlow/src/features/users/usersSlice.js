import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Rishi Kumar" },
  { id: "1", name: "Priyanshu" },
  { id: "2", name: "Meer Ansari" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
