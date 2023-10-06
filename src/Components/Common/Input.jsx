import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

export default function Input({
  value = "",
  placeholder,
  type,
  handleClickShowPassword,
  showPassword,
  color,
  variant = "standard",
  size = "normal",
  rows = 0,
  multiline = false,
  shrink = false,
  defaultValue = ""
}) {
  const inputStyles = {
    label: {
      color: color,
    },
    underlineAfter: {
      borderBottomColor: color,
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
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        fullWidth
        // error
        // helperText="Incorrect entry."
        value={value}
        label={placeholder}
        type={type}
        variant={variant}
        size={size}
        rows={rows}
        defaultValue={defaultValue}
        multiline={multiline}
        InputProps={{
          style: {
            color: color,
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {placeholder === "Password" &&
                  (!showPassword ? (
                    <VisibilityOff sx={{ color: color, marginRight: "10px" }} />
                  ) : (
                    <Visibility sx={{ color: color, marginRight: "10px" }} />
                  ))}
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          style: inputStyles.label,
          shrink: placeholder === "DOB" ? shrink : undefined,
        }}
        sx={{
          color: color,
          "& label.Mui-focused": inputStyles.label,
          "& .MuiInput-underline:after": inputStyles.underlineAfter,
          "& .MuiInput-underline:before": inputStyles.underlineAfter,
          "& .MuiInput-root:hover:before": inputStyles.underlineAfter,
          "& .MuiOutlinedInput-root": inputStyles.outlinedRoot,
        }}
      />
    </Box>
  );
}
