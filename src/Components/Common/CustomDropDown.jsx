import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({
  width = "500px",
  background = undefined,
  label,
  data,
}) {
  const [info, setInfo] = React.useState("");

  const handleChange = (event) => {
    setInfo(event.target.value);
  };
  return (
    <Box sx={{ width: width, background: background }} gap={1}>
      <FormControl
        sx={{
          width: "100%",
          height: "60px", // Adjust the height as needed
        }}
      >
        <InputLabel id="demo-simple-select-label" sx={{ color: "black" }}>
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={info}
          label={label}
          onChange={handleChange}
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
      </FormControl>
    </Box>
  );
}
