import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import TestData from "../Tests/TestData";
import { Stack, Grid, Paper, useMediaQuery } from "@mui/material";
import CustomDropDown from "../../Common/CustomDropDown";
import { useTheme } from "@mui/material/styles";
const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

function AssessmentStage2nd() {
  const [chipData, setChipData] = useState([
    { key: 0, label: "1st Test" },
    { key: 1, label: "2st Test" },
    { key: 2, label: "3st Test" },
    { key: 3, label: "4st Test" },
    { key: 4, label: "5st Test" },
  ]);
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
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
            p: 2,
            m: 0,
            width: 1200,
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
                    sx={{ border: "none", my: 1, fontSize: 20 }}
                  />
                </Box>
              </ListItem>
            );
          })}
        </Paper>
      </Stack>
      <Stack
        direction="row"
        justifyContent={onlySmallScreen ? "center" : "space-between"}
        mb={5}
        display="flex"
        flexWrap="wrap"
        gap={2}
      >
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
      {/* test data */}
      <Stack direction="row" justifyContent="space-between">
        <TestData addButton={true} />
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
