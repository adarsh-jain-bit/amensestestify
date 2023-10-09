import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { MuiTelInput } from "mui-tel-input";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import KeyIcon from "@mui/icons-material/Key";
import EmailIcon from "@mui/icons-material/Email";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Input from "../../Common/Input";
import Stack from "@mui/material/Stack";
function MyProfileTab() {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "50ch" },
            height: "55.75vh",
          }}
          noValidate
          autoComplete="off"
        >
          <Typography
            variant="h5"
            gutterBottom
            my={5}
            sx={{ fontWeight: "bolder" }}
          >
            Personal information
          </Typography>

          <Stack direction="row" spacing={6}>
            <Input
              placeholder="First Name"
              variant="outlined"
              type="text"
              defaultValue="Deepesh"
            />
            <Input
              placeholder="Last Name"
              variant="outlined"
              type="text"
              defaultValue="Trivedi"
            />
          </Stack>

          <MuiTelInput
            value={value}
            onChange={handleChange}
            id="outlined-required"
            label="Phone Number"
          />
          <Typography
            variant="h5"
            gutterBottom
            my={3}
            sx={{ fontWeight: "bolder" }}
          >
            Language selection
          </Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={languages}
            renderInput={(params) => (
              <TextField {...params} label="Language of Assessment" />
            )}
          />
          <Box mt={3}>
            <Button
              variant="contained"
              startIcon={<KeyIcon />}
              sx={{
                mr: 5,
                bgcolor: "#46A997",
                "&:hover": { bgcolor: "#46A997" },
              }}
            >
              Change Password
            </Button>
            <Button
              variant="contained"
              endIcon={<EmailIcon />}
              sx={{ bgcolor: "#46A997", "&:hover": { bgcolor: "#46A997" } }}
            >
              Change Email
            </Button>
            <Button
              variant="contained"
              sx={{
                ml: 60,
                bgcolor: "#46A997",
                "&:hover": { bgcolor: "#46A997" },
              }}
            >
              Save changes
            </Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default MyProfileTab;

const languages = ["English", "Hindi", "Turkey", "Spanish"];
