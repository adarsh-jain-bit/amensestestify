import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import TestCard from "../Tests/TestCard";
import { Stack, Grid, Paper } from "@mui/material";
import CustomDropDown from "../../Common/CustomDropDown";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

var arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(i);
}
function AssessmentStage2nd() {
  const [chipData, setChipData] = useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <div>
      <Stack direction="row" justifyContent="center" spacing={5} mb={10}>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            listStyle: "none",
            p: 0.5,
            m: 0,
            width: 1200,
            height: 70,
          }}
          component="ul"
        >
          {chipData.map((data) => {
            let icon;

            return (
              <ListItem key={data.key}>
                <Box
                  component="span"
                  sx={{ p: 1.5, border: "1px dashed grey", mx: 3 }}
                >
                  <Chip
                    icon={icon}
                    label={data.label}
                    onDelete={handleDelete(data)}
                    color="primary"
                    variant="outlined"
                    size="large"
                    sx={{ ml: 4, border: "none", my: 1, fontSize: 20, mx: 2 }}
                  />
                </Box>
              </ListItem>
            );
          })}
        </Paper>
      </Stack>
      <Stack direction="row" justifyContent="space-between" mb={5}>
        <CustomDropDown
          background="white"
          label="Job role"
          width="300px"
          data={testType}
        />
        <CustomDropDown
          background="white"
          label="Test type"
          width="300px"
          data={testName}
        />
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Grid container spacing={4} mt={3}>
          {arr.map((arr, index) => {
            return <TestCard index={index} />;
          })}
        </Grid>
      </Stack>
    </div>
  );
}

export default AssessmentStage2nd;

const testType = [
  "My company Test",
  "Cognitive Test",
  "Personality & Culture",
  "Programming Skill",
];
const testName = [
  "My company Test",
  "Cognitive Test",
  "Personality & Culture",
  "Programming Skill",
];
