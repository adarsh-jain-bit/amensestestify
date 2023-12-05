import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateField, updateError } from "../ReduxSlice/CandidateDataSlice";
export default function BasicSelect({
  width = "500px",
  background = undefined,
  label,
  data,
  validateField,
  height = "60px",
  id = "id",
}) {
  const dispatch = useDispatch();
  const { degree, error } = useSelector((data) => data.CandidateData);
  const handleChange = (event) => {
    if (event.target.value === null) {
      validateField("degree", degree);
    } else {
      dispatch(updateField({ field: "degree", value: event.target.value }));
      dispatch(updateError({ field: "degree", value: "" }));
    }
  };

  return (
    <Box
      sx={{
        width: width,
        background: background,
        mb: `${error.degree ? "20px" : undefined}`,
        height: `calc(${height} - 3px)`,
      }}
      gap={1}
      id={id}
    >
      <FormControl
        sx={{
          width: "100%",
          height: height, // Adjust the height as needed
          borderColor: error.degree ? "red" : "initial",
        }}
      >
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            color: "black",
            top: "-5px",
          }}
        >
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={degree}
          label={label}
          onChange={(e) => handleChange(e)}
          size="small"
          sx={{
            height: "100%",
          }}
        >
          {data.length > 0 &&
            data.map((value) => {
              return (
                <MenuItem value={value} key={value}>
                  {value}
                </MenuItem>
              );
            })}
        </Select>
        <FormHelperText error={Boolean(error.degree)}>
          {error.degree}
        </FormHelperText>
      </FormControl>
    </Box>
  );
}
