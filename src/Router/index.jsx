import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRegister from "../UserRegister";
import UserList from "../UserList";
import TaskForm from "../TaskForm";
import TaskList from "../TaskList";
import App from "../App"
import ProfileSection from "../Components/MyProfile/ProfileSection";
export default function Router1() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/admin/myassessments" element={<UserRegister />} />
        <Route path="/admin/mycandidates" element={<TaskForm />} />
        <Route path="/admin/tests" element={<TaskList />} /> */}

        <App />
      </Routes>
    </BrowserRouter>
  );
};
