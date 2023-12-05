import { ThemeProvider } from "styled-components";
import React, { useState } from "react";
import "./App.css";
import { styled } from "@mui/system";
import MyAssessment from "./Components/AdminPages/Assessment/MyAssessment";
import MyCandidates from "./Components/AdminPages/CreateNewAssessment/Candidates/MyCandidates";
import ProfileSection from "./Components/MyProfile/ProfileSection";
import NewAssessment from "./Components/AdminPages/CreateNewAssessment/NewAssessment";
import ResetPassword from "./Components/Login/ResetPassword";
import Test from "./Components/AdminPages/Tests/Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import PrivateRoute from "./Components/Common/PrivateRoute";
import CandidateForm from "./Components/CandidatePages/CandidateForm/CandidateForm";
function App() {
  const BootStrapContainer = styled("div")({
    width: "100%",
    height: "100%",
    background: "rgb(245,246,246)",
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <>
          <Nav />
          <BootStrapContainer>
            <Routes>
              <Route
                path="/"
                element={<PrivateRoute element={<MyAssessment />} />}
              />
              <Route
                path="/MyProfile"
                element={
                  <PrivateRoute
                    element={<ProfileSection value="1" key="MyProfile" />}
                  />
                }
              />
              <Route
                path="/Notifications"
                element={
                  <PrivateRoute
                    element={<ProfileSection value="2" key="Notifications" />}
                  />
                }
              />
              <Route
                path="/MyCompany"
                element={
                  <PrivateRoute
                    element={<ProfileSection value="3" key="MyCompany" />}
                  />
                }
              />
              <Route
                path="/Teammanagement"
                element={
                  <PrivateRoute
                    element={<ProfileSection value="4" key="teammanagemant" />}
                  />
                }
              />
              <Route
                path="/Assessmentsettings"
                element={
                  <PrivateRoute
                    element={
                      <ProfileSection value="5" key="assessmentsettings" />
                    }
                  />
                }
              />
              <Route
                path="/MyAssessment"
                element={<PrivateRoute element={<MyAssessment />} />}
              />
              <Route
                path="/MyCandidates"
                element={<PrivateRoute element={<MyCandidates />} />}
              />
              <Route
                path="/Tests"
                element={<PrivateRoute element={<Test />} />}
              />
              <Route
                path="/NewAssessment"
                element={<PrivateRoute element={<NewAssessment />} />}
              />
              <Route path="/login" element={<LoginSignUp />} />
            </Routes>
          </BootStrapContainer>
        </>

        {/* <QuestionDashboard /> */}
        {/* <TestWindow /> */}
        {/* <MyCandidates /> */}
        {/* <CandidateForm /> */}
        {/* <ResetPassword /> */}
        {/* <MyCandidates /> */}
        {/* <LoginSignUp /> */}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
