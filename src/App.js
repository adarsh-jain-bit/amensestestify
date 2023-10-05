import { ThemeProvider } from "styled-components";
import "./App.css";
import MyAssessment from "./Components/AdminPages/Assessment/MyAssessment";
import Navbar from "./Components/Navbar/Navbar";
import Theme from "./Components/Common/Theme";
import Login from "./Components/Login/Login";
import ResetPassword from "./Components/Login/ResetPassword";
import CandidateForm from "./Components/CandidatePages/CandidateForm/CandidateForm";
import Test from "./Components/AdminPages/Tests/Test";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      {/* <Navbar />   */}
      {/* <MyAssessment /> */}
      {/* <Login /> */}
      <CandidateForm />
      {/* <Test /> */}
      {/* <ResetPassword /> */}
      {/* <MyCandidates /> */}
    </ThemeProvider>
  );
}

export default App;
