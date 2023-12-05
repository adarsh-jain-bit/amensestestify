import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./ApiSlice";
import fieldReducer from "../ReduxSlice/NewAssessmentFieldData";
import CandidateDataSlice from "./CandidateDataSlice";
import questionReducer from "./QuestionSlice";
import LoginSlice from "./LoginSlice";
export const Store = configureStore({
  reducer: {
    api: apiReducer,
    newAssessmentField: fieldReducer,
    CandidateData: CandidateDataSlice,
    questtion: questionReducer,
    login: LoginSlice,
  },
});
