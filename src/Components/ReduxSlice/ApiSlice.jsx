import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitSignUp = createAsyncThunk(
  "form/submitSignUp",
  async (formData, { dispatch, rejectWithValue }) => {
    try {
      console.log(formData);
      dispatch(submitFormStart());
      const response = await axios.post(
        "https://testify-qvv2.onrender.com/org/create_organisation",
        formData
      );
      // dispatch(submitFormSuccess(response.data));
      dispatch(submitFormSuccess());
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      dispatch(submitFormFailure(error.message));
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  formData: {},
  isLoading: false,
  error: null,
  success: false,
};

const ApiSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    submitFormStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    submitFormSuccess: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.success = true;
      // state.formData = action.payload.data;
    },
    submitFormFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { submitFormStart, submitFormSuccess, submitFormFailure } =
  ApiSlice.actions;
export default ApiSlice.reducer;
