import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createCandidate = (candidateData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://testify-qvv2.onrender.com/candidate/create_candidate",
      candidateData
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
const fieldsSlice = createSlice({
  name: "candidateData",
  initialState: {
    email: "",
    name: "",
    mobileNo: "",
    birthDate: "",
    address: "",
    collegeName: "",
    degree: "",
    skills: [],
    collegeScore: "",
    resume: "",
    error: {
      email: "",
      name: "",
      mobileNo: "",
      birthDate: "",
      address: "",
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
        birthDate: "",
        address: "",
        collegeName: "",
        degree: "",
        skills: [],
        collegeScore: "",
        resume: "",
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
