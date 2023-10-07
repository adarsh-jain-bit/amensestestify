import { ThemeProvider } from "styled-components";
import "./App.css";
import MyAssessment from "./Components/AdminPages/Assessment/MyAssessment";
import Navbar from "./Components/Navbar/Navbar";
import theme from "./Components/Common/theme";
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
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/MyProfile" element={<ProfileSection />}></Route>
          <Route path="/Notifications" element={<ProfileSection />}></Route>
          <Route path="/MyCompany" element={<ProfileSection />}></Route>
          <Route path="/Teammanagement" element={<ProfileSection />}></Route>
          <Route
            path="/Assessmentsettings"
            element={<ProfileSection />}
          ></Route>
          {/* <MyAssessment /> */}
          {/* <MyCandidates /> */}
          {/* <ProfileSection /> */}
          {/* <NewAssessment /> */}
          {/* <Login /> */}
          {/* <CandidateForm /> */}
          {/* <Test /> */}
          {/* <ResetPassword /> */}
          {/* <MyCandidates /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
