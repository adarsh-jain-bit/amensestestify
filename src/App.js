import { ThemeProvider } from "styled-components";
import "./App.css";
import Theme from "./Components/Common/Theme";
import CandidateForm from "./Components/CandidatePages/CandidateForm/CandidateForm";
import Login from "../src/Components/Login/Login";
import DetailModal from "./Components/Common/Modal/DetailModal";
function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        {/* <CandidateForm /> */}
        {/* <Login /> */}
        <DetailModal />
      </ThemeProvider>
    </>
  );
}

export default App;
