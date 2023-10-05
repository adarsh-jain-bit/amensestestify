import { ThemeProvider } from "styled-components";
import "./App.css";
import MyAssessment from "./Components/AdminPages/Assessment/MyAssessment";
import Navbar from "./Components/Navbar/Navbar";
import theme from "./Components/Common/theme";
import MyCandidates from "./Components/AdminPages/Candidates/MyCandidates";
import ProfileSection from "./Components/MyProfile/ProfileSection";
import NewAssessment from "./Components/MyAssessment/CreateNewAssessment/NewAssessment";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Navbar /> */}
      {/* <MyAssessment /> */}
      {/* <MyCandidates /> */}
      <ProfileSection />
      {/* <NewAssessment /> */}
    </ThemeProvider>
  );
}

export default App;
