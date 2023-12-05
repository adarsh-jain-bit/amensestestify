import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  question: "",
  options: ["", "", "", ""],
  correctAnswer: 0,
  techStack: "",
  testLevel: "",
  isLoading: false,
  error: null,
};

export const submitQuestion = createAsyncThunk(
  "question/createQuestion",
  async (questionData) => {
    try {
      const respone = await axios.post(
        "https://testify-qvv2.onrender.com/question/create_question",
        questionData
      );
      return respone.data;
    } catch (error) {
      throw error.respone.data;
    }
  }
);

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload;
    },
    setOption: (state, action) => {
      const { index, text } = action.payload;
      state.options[index] = text;
    },
    setCorrectAnswer: (state, action) => {
      state.correctAnswer = action.payload;
    },
    setTechStack: (state, action) => {
      state.techStack = action.payload;
    },
    setTestLevel: (state, action) => {
      state.testLevel = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitQuestion.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(submitQuestion.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(submitQuestion.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setQuestion } = questionSlice.actions;

export default questionSlice.reducer;
