import { createSlice } from "@reduxjs/toolkit";

const fieldsSlice = createSlice({
  name: "candidateData",
  initialState: {
    email: "",
    name: "",
    mobileNo: "",
    DOB: "",
    Address: "",
    collegeName: "",
    degree: "",
    skills: [],
    collegeScore: null,
    resume: null,
    error: {
      email: "",
      name: "",
      mobileNo: "",
      DOB: "",
      Address: "",
      collegeName: "",
      degree: "",
      skills: "",
      collegeScore: "",
      resume: "",
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
        email: "",
        name: "",
        mobileNo: "",
        DOB: "",
        Address: "",
        collegeName: "",
        degree: "",
        skills: [],
        collegeScore: null,
        resume: null,
        error: {
          email: "",
          name: "",
          mobileNo: "",
          DOB: "",
          Address: "",
          collegeName: "",
          degree: "",
          skills: "",
          collegeScore: "",
          resume: "",
        },
      };
    },
  },
});

export const { updateField, updateError, clearFields } = fieldsSlice.actions;

export default fieldsSlice.reducer;
