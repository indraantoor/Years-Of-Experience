import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  name: "Indraan S Toor",
  username: "indraantoor",
  profilePic:
    "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  age: 20,
};

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  updateName: (state, action) => {
    state.name = action.payload.name;
  },
});
