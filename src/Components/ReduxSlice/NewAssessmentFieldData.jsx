// fieldsSlice.js
import { createSlice } from "@reduxjs/toolkit";

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
      state[action.payload.field] = action.payload.value;
    },
    updateError: (state, action) => {
      state.error[action.payload.field] = action.payload.value;
    },
    clearFields: (state) => {
      state = {
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

export default fieldsSlice.reducer;
