import React, { useEffect } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

export default function ChipsArray({ chips, setChips }) {
  const handleDelete = (chipToDelete) => {
    let newChips = chips.filter((val) => {
      return chips.indexOf(val) !== chipToDelete;
    });
    setChips(newChips);
  };
  console.log(chips);
  return (
    <Paper
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: "8px",
        margin: "8px 0",
      }}
      component="ul"
    >
      {chips.map((chip, index) => (
        <li key={index}>
          <Chip
            label={chip}
            onDelete={() => handleDelete(index)}
            color="primary"
            sx={{ margin: "5px 5px" }}
          />
        </li>
      ))}
    </Paper>
  );
}
