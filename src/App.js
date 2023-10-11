import { ThemeProvider } from "styled-components";
import React, { useEffect } from "react";
import "./App.css";
import { styled } from "@mui/system";
import MyAssessment from "./Components/AdminPages/Assessment/MyAssessment";
import Navbar from "./Components/Navbar/Navbar";
import MyCandidates from "./Components/AdminPages/Candidates/MyCandidates";
import ProfileSection from "./Components/MyProfile/ProfileSection";
import NewAssessment from "./Components/MyAssessment/CreateNewAssessment/NewAssessment";
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
// import Theme from "./Components/Common/Theme";
import TestWindow from "./Components/Test window/TestWindow";
import QuestionDashboard from "./Components/Question Dashboard/QuestionDashboard";
function App() {
  const BootStrapContainer = styled("div")({
    width: "100%",
    height: "100%",
    background: "rgb(245,246,246)",
  });

  return (
    <BrowserRouter>
      {/* <ThemeProvider theme={Theme}> */}
      {/* <Navbar /> */}
      {/* <BootStrapContainer>
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
            element={<ProfileSection value="5" key="assessmentsettings" />}
          />
          <Route path="/MyAssessment" element={<MyAssessment />} />
          <Route path="/MyCandidates" element={<MyCandidates />} />
          <Route path="/Tests" element={<Test />} />
          <Route path="/NewAssessment" element={<NewAssessment />} />
        </Routes>
      </BootStrapContainer> */}
      <QuestionDashboard />
      {/* <MyAssessment /> */}
      {/* <TestWindow /> */}
      {/* <MyCandidates /> */}
      {/* <ProfileSection /> */}
      {/* <NewAssessment /> */}
      {/* <Login /> */}
      {/* <CandidateForm /> */}
      {/* <Test /> */}
      {/* <ResetPassword /> */}
      {/* <MyCandidates /> */}
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
}

export default App;
