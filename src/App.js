import { ThemeProvider } from "styled-components";
import "./App.css";
import MyAssessment from "./Components/AdminPages/Assessment/MyAssessment";
import Navbar from "./Components/Navbar/Navbar";
import MyCandidates from "./Components/AdminPages/Candidates/MyCandidates";
import ProfileSection from "./Components/MyProfile/ProfileSection";
import NewAssessment from "./Components/MyAssessment/CreateNewAssessment/NewAssessment";
import Theme from "./Components/Common/theme";
import Login from "./Components/Login/Login";
import ResetPassword from "./Components/Login/ResetPassword";
import CandidateForm from "./Components/CandidatePages/CandidateForm/CandidateForm";
import Test from "./Components/AdminPages/Tests/Test";
import { BrowserRouter, Route, Router, Routes, Outlet } from "react-router-dom";
import MyProfileTab from "./Components/MyProfile/ProfileTabs/MyProfileTab";
import NotificationTab from "./Components/MyProfile/ProfileTabs/NotificationTab";
import MyCompany from "./Components/MyProfile/ProfileTabs/MyCompany";
import TeamManagement from "./Components/MyProfile/ProfileTabs/TeamManagement";
import AssessmentSetting from "./Components/MyProfile/ProfileTabs/AssessmentSetting";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          <Route path="MyProfile" element={<ProfileSection value="1" />} />
          <Route path="Notifications" element={<ProfileSection value="2" />} />
          <Route path="MyCompany" element={<ProfileSection value="3" />} />
          <Route path="Teammanagement" element={<ProfileSection value="4" />} />
          <Route
            path="Assessmentsettings"
            element={<ProfileSection value="5" />}
          />
        </Routes>

        {/* <MyAssessment /> */}
        {/* <MyCandidates /> */}
        {/* <ProfileSection /> */}
        {/* <NewAssessment /> */}
        {/* <Login /> */}
        {/* <CandidateForm /> */}
        {/* <Test /> */}
        {/* <ResetPassword /> */}
        {/* <MyCandidates /> */}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
