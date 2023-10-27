import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function Input({
<<<<<<< HEAD
=======
  value = "",
  handleUserData,
>>>>>>> e62b0c7ffc11e7d8baf227b1d69169b259cb0286
  placeholder,
  value = "",
  type,
  name = "",
  handleClickShowPassword,
  showPassword,
  color,
  variant = "standard",
  size = "normal",
  rows = 0,
  multiline = false,
  shrink = false,
<<<<<<< HEAD
  name,
  onChange,
  width = "auto",
  background = undefined,
  height = "auto", // Adjust the height as needed
=======
  // defaultValue = "",
  width = "auto",
  background = undefined,
  // height = "60px", // Adjust the height as needed
>>>>>>> e62b0c7ffc11e7d8baf227b1d69169b259cb0286
}) {
  const inputStyles = {
    label: {
      color: color,
    },
    underline: {
      "&:hover:not(.Mui-disabled):before": {
        borderBottomColor: color,
      },
      "&:before": {
        borderBottomColor: color,
      },
      "&:after": {
        borderBottomColor: color,
      },
    },
    outlinedRoot: {
      "& fieldset": {
        borderColor: color,
      },
      "&:hover fieldset": {
        borderColor: color,
      },
      "&.Mui-focused fieldset": {
        borderColor: color,
      },
    },
  };

  return (
    <Box
      sx={{
        width: width,
        maxWidth: "100%",
        background: background,
      }}
    >
      <TextField
        fullWidth
        label={placeholder}
        value={value}
        type={type}
        variant={variant}
        size={size}
        rows={rows}
        name={name}
<<<<<<< HEAD
        multiline={multiline}
        onChange={onChange}
=======
        // defaultValue={defaultValue}
        multiline={multiline}
        onChange={(e) => handleUserData(e)}
>>>>>>> e62b0c7ffc11e7d8baf227b1d69169b259cb0286
        InputProps={{
          style: {
            color: color,
            // height: height, // Set the height here
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {placeholder === "Password" &&
                  (!showPassword ? (
                    <VisibilityOff sx={{ color: color }} />
                  ) : (
                    <Visibility sx={{ color: color }} />
                  ))}
                {placeholder === "Search anything here" && <SearchIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          style: inputStyles.label,
<<<<<<< HEAD
          shrink: true,
=======
          // shrink: shrink,
>>>>>>> e62b0c7ffc11e7d8baf227b1d69169b259cb0286
        }}
        sx={{
          color: color,
          "& label.Mui-focused": inputStyles.label,
          "& .MuiInput-underline": inputStyles.underline,
          "& .MuiOutlinedInput-root": inputStyles.outlinedRoot,
        }}
      />
    </Box>
  );
}
