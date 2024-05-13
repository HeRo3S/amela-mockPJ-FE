import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import AuthService from "../../api/auth";
import { showAlert } from "./alertSlice";
import API from "constants/api";
import { signin } from "api/authentication";
import { isAxiosError } from "axios";

const initialState = {
  userInfo: {
    lastName: "Lê",
    firstName: "Hùng",
    role: "admin",
    email: "hero3s.vn@gmail.com",
    phoneNumber: "083xxxxxxxx",
    dateOfBirth: "2001/25/09",
    gender: "male",
    bio: "",
  },
  token: "",
  isLoggedIn: false,
};

export const login = createAsyncThunk(
  API.LOG_IN,
  async (data: { email: string; password: string }, thunkAPI) => {
    try {
      const res = await signin(data);
      thunkAPI.dispatch(
        showAlert({
          severity: "success",
          message: "Đăng nhập thành công",
        })
      );
      return res;
    } catch (err) {
      if (isAxiosError(err)) {
        thunkAPI.dispatch(
          showAlert({
            severity: "error",
            message: err.response?.data.message,
          })
        );
        return thunkAPI.rejectWithValue(err.response?.data.message);
      }
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// export const register = createAsyncThunk(
//   "auth/register",
//   async (data, thunkAPI) => {
//     try {
//       const res = await AuthService.signup(data);
//       thunkAPI.dispatch(
//         showAlert({
//           severity: "success",
//           message: "Đăng ký thành công",
//         })
//       );
//       return res;
//     } catch (err) {
//       thunkAPI.dispatch(
//         showAlert({
//           severity: "error",
//           message: err.response.data.message,
//         })
//       );
//       return thunkAPI.rejectWithValue(err.response.data.message);
//     }
//   }
// );

// export const logout = createAsyncThunk("auth/logout", async (thunkAPI) => {
//   try {
//     const res = await AuthService.logout();
//     return res;
//   } catch (err) {
//     thunkAPI.dispatch(
//       showAlert({
//         severity: "error",
//         message: err.response.data.message,
//       })
//     );
//     return thunkAPI.rejectWithValue(err.response.data.message);
//   }
// });

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeUserInfo: (state, action) => {
      const { data } = action.payload;
      state.userInfo = data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.userInfo = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state) => {
        state.userInfo = {};
        state.token = "";
        state.isLoggedIn = false;
      });
    //     // .addCase(register.fulfilled, (state, action) => {
    //     //   state.userInfo = action.payload.user;
    //     //   state.token = action.payload.token;
    //     //   state.isLoggedIn = true;
    //     // })
    //     .addCase(register.rejected, (state) => {
    //       state.userInfo = {};
    //       state.token = "";
    //       state.isLoggedIn = false;
    //     })
    //     .addCase(logout.fulfilled, (state) => {
    //       state.userInfo = {};
    //       state.token = "";
    //       state.isLoggedIn = false;
    //     });
  },
});

export default authSlice.reducer;

export const { changeUserInfo } = authSlice.actions;
