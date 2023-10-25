import {
  Stack,
  Typography,
  Container,
  Grid,
  Button,
  Paper,
  InputBase,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import TestCard from "./TestCard";
// import Input from "../../Common/Input";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import CustomDropDown from "../../Common/CustomDropDown";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
var arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(i);
}
const Test = () => {
  const Language = ["Hindi", "English", "Urdu", "German"];
  const JobRole = ["Backend", "Frontend", "Full Stack"];
  const TestType = ["Aptitude Test", "Typing Test", "Software Skills"];
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const onlyLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const buttonStyle = {
    backgroundColor: "#5C5470",
    color: "white",
    height: onlySmallScreen ? "40px" : "50px",
    width: onlySmallScreen ? "40px" : "250px",
    paddingRight: 0,
  };

  return (
    <Container>
      <Stack
        display="flex"
        justifyContent="space-between"
        direction="row"
        py={5} // Add padding top and bottom for spacing
      >
        <Typography variant="h6" fontWeight="700" fontFamily="sans-serif">
          My Assessments
        </Typography>
        <Stack display="flex" direction="row" gap={2}>
          <Link
            to="/NewAssessment"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button
              variant="outlined"
              startIcon={<AddCircleOutlineIcon />}
              style={buttonStyle}
            >
              {onlySmallScreen ? " " : "Create new Assessment"}
            </Button>
          </Link>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        gap={4}
        mt={3}
        justifyContent="center"
        flexWrap={onlyLargeScreen ? "wrap" : "nowrap"}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 2px",
            display: "flex",
            alignItems: "center",
            width: `${onlyLargeScreen ? "43%" : "500px"}`,
            height: 60,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, height: "5px" }}
            placeholder="Search Assessment"
            inputProps={{ "aria-label": "Search Assessment" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <CustomDropDown
          background="white"
          label="Language"
          data={Language}
          width={onlyLargeScreen ? "43%" : "500px"}
        />
        <CustomDropDown
          background="white"
          label="Job role"
          data={JobRole}
          width={onlyLargeScreen ? "43%" : "500px"}
        />
        <CustomDropDown
          background="white"
          label="Test type"
          data={TestType}
          width={onlyLargeScreen ? "43%" : "500px"}
        />
      </Stack>
      <Grid container spacing={4} mt={3}>
        {arr.map((arr, index) => {
          return <TestCard index={index} />;
        })}
      </Grid>
    </Container>
  );
};

export default Test;
