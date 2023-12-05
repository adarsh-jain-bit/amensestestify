import React from "react";
import CustomDropDown from "../../../Common/CustomDropDown";
import {
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
  Container,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
const MyCandidates = () => {
  const Assesment = ["MERN", "Flutter", "ReactJS", "Full Stack"];
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
      <Box sx={{ height: "91vh" }}>
        <Stack
          display="flex"
          justifyContent="space-between"
          direction="row"
          py={5} // Add padding top and bottom for spacing
        >
          <Typography variant="h6" fontWeight="700" fontFamily="sans-serif">
            My Candidates
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
                {onlySmallScreen ? "" : "Create new Assessment"}
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Stack
          display="flex"
          justifyContent="space-between"
          direction="row"
          py={3} // Add padding top and bottom for spacing
        >
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: onlyLargeScreen ? "100%" : "400px",
              height: 55,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, height: "5px", m: 3 }}
              placeholder="Search Assessment"
              inputProps={{ "aria-label": "Search Assessment" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          {!onlyLargeScreen ? (
            <>
              <CustomDropDown
                width="180px"
                background="white"
                label="Language"
                data={Assesment}
              />
              <CustomDropDown
                width="180px"
                background="white"
                label="Language"
                data={TestType}
              />
              <CustomDropDown
                width="180px"
                background="white"
                label="Language"
                data={JobRole}
              />
            </>
          ) : (
            ""
          )}
        </Stack>
      </Box>
    </Container>
  );
};

export default MyCandidates;
