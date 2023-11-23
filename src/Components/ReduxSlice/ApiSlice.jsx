import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAuthToken = () => {
  return "beuwbvebvhbgyvyvtct121314";
};
let token = "beuwbvebvhbgyvyvtct121314";
export const submitSignUp = createAsyncThunk(
  "form/submitSignUp",
  async (formData, { dispatch, getState, rejectWithValue }) => {
    try {
      dispatch(submitFormStart());
      const response = await axios.post(
        "https://testify-qvv2.onrender.com/org/create_user",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(submitFormSuccess(response.data));
      console.log(response.data);
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
  access_token: "",
  status: "",
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
      state.formData = action.payload.data;
      state.access_token = action.payload.access_token;
      state.status = action.payload.status;
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
