import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
export default function Input({
  value = "",
  placeholder,
  onChange,
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
  width = "auto",
  background = undefined,
  height = "auto", // Adjust the height as needed
  onValidate,
  error = "",
  helperText = "",
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
        multiline={multiline}
        onChange={onChange}
        onBlur={() => onValidate(name, value)}
        error={error}
        helperText={helperText}
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
          // shrink: shrink,
        }}
        sx={{
          ".css-1d1r5q-MuiFormHelperText-root.Mui-error": {
            color: "#f22c2c",
          },
          color: color,
          "& label.Mui-focused": inputStyles.label,
          "& .MuiInput-underline": inputStyles.underline,
          "& .MuiOutlinedInput-root": inputStyles.outlinedRoot,
        }}
      />
    </Box>
  );
}
