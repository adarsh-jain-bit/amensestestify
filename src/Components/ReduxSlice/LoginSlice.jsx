import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk for the login action
export const submitLogin = createAsyncThunk(
  "auth/submitLogin",
  async (loginData, { dispatch, rejectWithValue }) => {
    console.log("loginData", loginData);
    try {
      dispatch(submitLoginStart());
      const response = await axios.post(
        "https://testify-qvv2.onrender.com/org/login",
        loginData
      );
      dispatch(submitLoginSuccess(response.data));
      console.log(response.data);
      return response.data;
    } catch (error) {
      dispatch(submitLoginFailure(error.message));
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loginData: {},
  isLoading: false,
  error: null,
  success: false,
  access_token: "",
  status: "",
};

const loginSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    submitLoginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    submitLoginSuccess: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.formData = action.payload.data;
      state.access_token = action.payload.access_token;
      state.status = action.payload.status;
    },
    submitLoginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { submitLoginStart, submitLoginSuccess, submitLoginFailure } =
  loginSlice.actions;
export default loginSlice.reducer;
