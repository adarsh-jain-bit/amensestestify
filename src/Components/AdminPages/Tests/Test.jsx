import { Stack, Typography, Container, Grid, Paper, Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import TestCard from "./TestCard";
import Input from "../../Common/Input";
import CustomDropDown from "../../Common/CustomDropDown";
const Button = styled("button")({
  letterSpacing: "1px",
  borderRadius: "5px",
  border: "none",
  outline: "none",
  cursor: "pointer",
  transition: "0.6s",
  color: "#FFFFFF",
  padding: "10px",
});

const BootStrapContainer = styled("div")({
  width: "100%",
  background: "gainsboro",
});
var arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(i);
}
const Test = () => {
  const Language = ["Hindi", "English", "Urdu", "German"];
  const JobRole = ["Backend", "Frontend", "Full Stack"];
  const TestType = ["Aptitude Test", "Typing Test", "Software Skills"];
  return (
    <BootStrapContainer>
      <Container>
        <Stack
          display="flex"
          justifyContent="space-between"
          direction="row"
          pt={3}
        >
          <Typography variant="h5" fontWeight="700" fontFamily="sans-serif">
            Tests
          </Typography>

          <Stack display="flex" direction="row" gap={2}>
            <Button sx={{ background: "#EDEDED", color: "black" }}>
              My Company Tests
            </Button>
            <Button sx={{ background: "#7d5ce9" }}>
              Create New Assesments
            </Button>
          </Stack>
        </Stack>
        <Stack direction="row" gap={4} mt={3}>
          <Input
            placeholder="Search anything here"
            type="text"
            color="black"
            variant="outlined"
            size="small"
            background="white"
          />
          <CustomDropDown background="white" label="Language" data={Language} />
          <CustomDropDown background="white" label="Job role" data={JobRole} />
          <CustomDropDown
            background="white"
            label="Test type"
            data={TestType}
          />
        </Stack>
        <Grid container spacing={4} mt={3}>
          {arr.map((arr, index) => {
            return <TestCard index={index} />;
          })}
        </Grid>
      </Container>
    </BootStrapContainer>
  );
};

export default Test;
