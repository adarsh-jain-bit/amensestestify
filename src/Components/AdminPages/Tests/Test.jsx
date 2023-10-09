import {
  Stack,
  Typography,
  Container,
  Grid,
  Button,
  Paper,
  InputBase,
  IconButton,
} from "@mui/material";
import React from "react";
import TestCard from "./TestCard";
// import Input from "../../Common/Input";
import SearchIcon from "@mui/icons-material/Search";
import CustomDropDown from "../../Common/CustomDropDown";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const buttonStyle = {
  backgroundColor: "#5C5470",
  color: "white",
  height: "50px",
  width: "250px",
};

var arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(i);
}
const Test = () => {
  const Language = ["Hindi", "English", "Urdu", "German"];
  const JobRole = ["Backend", "Frontend", "Full Stack"];
  const TestType = ["Aptitude Test", "Typing Test", "Software Skills"];
  return (
    <Container>
      <Stack
        display="flex"
        justifyContent="space-between"
        direction="row"
        py={5} // Add padding top and bottom for spacing
      >
        <Typography variant="h6" fontWeight="700" fontFamily="sans-serif">
          Tests
        </Typography>
        <Stack display="flex" direction="row" gap={2}>
          <Button
            variant="outlined"
            startIcon={<AddCircleOutlineIcon />}
            style={buttonStyle}
          >
            <Link
              to="/NewAssessment"
              style={{ textDecoration: "none", color: "white" }}
            >
              Create new Assessment
            </Link>
          </Button>
        </Stack>
      </Stack>
      <Stack direction="row" gap={4} mt={3}>
        {/* <Input
            placeholder="Search anything here"
            type="text"
            variant="outlined"
            size="small"
            background="white"
          /> */}
        <Paper
          component="form"
          sx={{
            p: "2px 2px",
            display: "flex",
            alignItems: "center",
            width: 500,
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
        <CustomDropDown background="white" label="Language" data={Language} />
        <CustomDropDown background="white" label="Job role" data={JobRole} />
        <CustomDropDown background="white" label="Test type" data={TestType} />
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
