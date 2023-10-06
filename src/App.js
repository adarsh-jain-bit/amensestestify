import { ThemeProvider } from "styled-components";
import "./App.css";
import Theme from "./Components/Common/Theme";
import CandidateForm from "./Components/CandidatePages/CandidateForm/CandidateForm";
import Login from "../src/Components/Login/Login";
import Test from "../src/Components/AdminPages/Tests/Test";
import ProfileSection from "../src/Components/MyProfile/ProfileSection";
import NewAssessment from "../src/Components/MyAssessment/CreateNewAssessment/NewAssessment";
function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CandidateForm />
        {/* <Login /> */}
        {/* <ProfileSection /> */}
        {/* <NewAssessment /> */}
        {/* <Test /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
