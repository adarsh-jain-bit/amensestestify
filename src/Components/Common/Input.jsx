import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

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
  defaultValue = "",
  width = 500,
  background = undefined,
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
                {placeholder === "Search anything here" && <SearchIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          style: inputStyles.label,
          shrink: shrink,
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
