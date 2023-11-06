import { ThemeProvider } from "styled-components";
import React, { useState } from "react";
import "./App.css";
import { styled } from "@mui/system";
import MyAssessment from "./Components/AdminPages/Assessment/MyAssessment";
import MyCandidates from "./Components/AdminPages/Candidates/MyCandidates";
import ProfileSection from "./Components/MyProfile/ProfileSection";
import NewAssessment from "./Components/AdminPages/CreateNewAssessment/NewAssessment";
import ResetPassword from "./Components/Login/ResetPassword";
import CandidateForm from "./Components/CandidatePages/CandidateForm/CandidateForm";
import Test from "./Components/AdminPages/Tests/Test";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MyProfileTab from "./Components/MyProfile/ProfileTabs/MyProfileTab";
import NotificationTab from "./Components/MyProfile/ProfileTabs/NotificationTab";
import MyCompany from "./Components/MyProfile/ProfileTabs/MyCompany";
import TeamManagement from "./Components/MyProfile/ProfileTabs/TeamManagement";
import AssessmentSetting from "./Components/MyProfile/ProfileTabs/AssessmentSetting";
import Theme from "./Components/Common/theme";
import TestWindow from "./Components/Test window/TestWindow";
import QuestionDashboard from "./Components/Question Dashboard/QuestionDashboard";
import Nav from "./Components/AdminPages/Navbar/Nav";
import LoginSignUp from "./Components/Login/LoginSignUpPage";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const BootStrapContainer = styled("div")({
    width: "100%",
    height: "100%",
    background: "rgb(245,246,246)",
  });
  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        {loggedIn ? (
          <>
            <Nav />
            <BootStrapContainer>
              <Routes>
                <Route path="/" element={<MyAssessment />} />
                <Route
                  path="/MyProfile"
                  element={<ProfileSection value="1" key="MyProfile" />}
                />
                <Route
                  path="/Notifications"
                  element={<ProfileSection value="2" key="Notifications" />}
                />
                <Route
                  path="/MyCompany"
                  element={<ProfileSection value="3" key="MyCompany" />}
                />
                <Route
                  path="/Teammanagement"
                  element={<ProfileSection value="4" key="teammanagemant" />}
                />
                <Route
                  path="/Assessmentsettings"
                  element={
                    <ProfileSection value="5" key="assessmentsettings" />
                  }
                />
                <Route path="/MyAssessment" element={<MyAssessment />} />
                <Route path="/MyCandidates" element={<MyCandidates />} />
                <Route path="/Tests" element={<Test />} />
                <Route path="/NewAssessment" element={<NewAssessment />} />
              </Routes>
            </BootStrapContainer>
          </>
        ) : (
          <LoginSignUp onLogin={handleLogin} />
        )}
        {/* <QuestionDashboard /> */}
        {/* <TestWindow /> */}
        {/* <MyCandidates /> */}
        {/* <CandidateForm /> */}
        {/* <ResetPassword /> */}
        {/* <MyCandidates /> */}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
