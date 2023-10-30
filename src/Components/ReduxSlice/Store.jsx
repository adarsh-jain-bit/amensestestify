import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./ApiSlice";
import fieldReducer from "../ReduxSlice/NewAssessmentFieldData";
export const Store = configureStore({
  reducer: {
    api: apiReducer,
    newAssessmentField: fieldReducer,
  },
});
