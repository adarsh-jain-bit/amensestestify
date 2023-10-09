import { ThemeProvider } from "styled-components";
import React, { useEffect } from "react";
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
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MyProfileTab from "./Components/MyProfile/ProfileTabs/MyProfileTab";
import NotificationTab from "./Components/MyProfile/ProfileTabs/NotificationTab";
import MyCompany from "./Components/MyProfile/ProfileTabs/MyCompany";
import TeamManagement from "./Components/MyProfile/ProfileTabs/TeamManagement";
import AssessmentSetting from "./Components/MyProfile/ProfileTabs/AssessmentSetting";
import TestWindow from "./Components/Test window/TestWindow";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        {/* <Navbar />
        <Routes>
          <Route path="/" />
          <Route
            path="/MyProfile"
            element={<ProfileSection value="1" key="myprofile" />}
          />
          <Route
            path="/Notifications"
            element={<ProfileSection value="2" key="notification" />}
          />
          <Route
            path="/MyCompany"
            element={<ProfileSection value="3" key="mycompany" />}
          />
          <Route
            path="/Teammanagement"
            element={<ProfileSection value="4" key="teammanagemant" />}
          />
          <Route
            path="/Assessmentsettings"
            element={<ProfileSection value="5" key="assessmentsettings" />}
          />
          <Route path="/MyAssessment" element={<MyAssessment />} />
          <Route path="/MyCandidates" element={<MyCandidates />} />
          <Route path="/Tests" element={<Test />} />
          <Route path="/NewAssessment" element={<NewAssessment />} />
        </Routes> */}
        {/* <TestWindow /> */}
        {/* <MyAssessment /> */}
        {/* <MyCandidates /> */}
        {/* <ProfileSection /> */}
        <NewAssessment />
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
