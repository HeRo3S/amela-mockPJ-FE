import { AlertColor } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

interface IState {
  severity: AlertColor;
  message: string;
}
const initialState: IState = {
  severity: "info",
  message: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert: (state, action) => {
      const { severity, message } = action.payload;
      state.severity = severity;
      state.message = message;
    },
    clearAlert: (state) => {
      state.message = "";
    },
  },
});

const { actions, reducer } = alertSlice;
export const { showAlert, clearAlert } = actions;
export default reducer;
