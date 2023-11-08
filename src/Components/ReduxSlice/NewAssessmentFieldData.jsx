// fieldsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fieldsSlice = createSlice({
  name: "fields",

  initialState: {
    assessmentName: "",
    language: null,
    jobRole: null,
    move: false,
    error: {
      assessmentName: "",
      language: null,
      jobRole: null,
    },
  },
  reducers: {
    updateField: (state, action) => {
      // Return a new state object with the updated field
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    },
    updateError: (state, action) => {
      // Return a new state object with the updated error field
      return {
        ...state,
        error: {
          ...state.error,
          [action.payload.field]: action.payload.value,
        },
      };
    },
    clearFields: () => {
      // Return the initial state to reset the fields
      return {
        assessmentName: "",
        language: null,
        jobRole: null,
        move: false,
        error: {
          assessmentName: "",
          language: null,
          jobRole: null,
        },
      };
    },
  },
});

export const { updateField, updateError, clearFields } = fieldsSlice.actions;

export const makeApiCall = (assessmentData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://testify-qvv2.onrender.com/assessment/create_assessment",
        assessmentData
      );
      console.log("API response: ", response.data);
    } catch (error) {
      console.error("API call error: ", error);
    }
  };
};

export default fieldsSlice.reducer;
