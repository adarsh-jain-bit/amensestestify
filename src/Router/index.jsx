import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRegister from "../UserRegister";
import UserList from "../UserList";
import TaskForm from "../TaskForm";
import TaskList from "../TaskList";

export const Router = function () {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/admin/myassessments" element={<UserRegister />} />
        <Route path="/admin/mycandidates" element={<TaskForm />} />
        <Route path="/admin/tests" element={<TaskList />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
