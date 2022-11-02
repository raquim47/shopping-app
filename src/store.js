import { configureStore, createSlice } from "@reduxjs/toolkit";

const navItemColor = createSlice({
  name: "navItemColor",
  initialState: "",

  reducers: {
    setNavItemColor(state, action) {
      return action.payload;
    },
  },
});

export const { setNavItemColor } = navItemColor.actions;

export default configureStore({
  reducer: {
    navItemColor: navItemColor.reducer,
  },
});
