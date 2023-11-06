import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Autocomplete,
  Button,
  CssBaseline,
  Container,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import KeyIcon from "@mui/icons-material/Key";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
function MyProfileTab() {
  const theme = useTheme();
  const dispatch = useDispatch();
  // const { name, email } = useSelector((state) => state.api);

  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const onlyMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
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
            "& .MuiTextField-root": { m: "1%" },
            height: "60vh",
          }}
          noValidate
          autoComplete="off"
        >
          <Typography
            variant="h5"
            gutterBottom
            my="3%"
            sx={{ fontWeight: "bolder" }}
          >
            Personal information
          </Typography>

          <Stack
            direction={onlySmallScreen ? "column" : "row"}
            spacing="3%"
            ml="1%"
          >
            <TextField
              fullWidth
              placeholder="First Name"
              variant="outlined"
              type="text"
              defaultValue="deepesh"
              size="small"
            />
            <TextField
              fullWidth
              placeholder="Last Name"
              variant="outlined"
              type="text"
              defaultValue="Trivedi"
              size="small"
            />
          </Stack>

          <Stack
            direction="row"
            spacing="2%"
            ml="1.5%"
            width={onlyMediumScreen ? "100%" : "49%"}
          >
            <MuiTelInput
              fullWidth
              value={value}
              onChange={handleChange}
              id="outlined-required"
              label="Phone Number"
              size="small"
            />
          </Stack>

          <Typography
            variant="h5"
            gutterBottom
            my="3%"
            sx={{ fontWeight: "bolder" }}
          >
            Language selection
          </Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={languages}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Language of Assessment"
                size="small"
                spacing="3%"
                ml="1.5%"
                width={"49%"}
              />
            )}
          />
          <Box
            mt="3%"
            ml="2%"
            display="flex"
            justifyContent={onlySmallScreen ? undefined : "space-between"}
            flexWrap="wrap"
            gap={2}
            flexDirection={onlySmallScreen ? "column" : "row"}
          >
            <Box
              sx={{ display: "flex", gap: "10px" }}
              flexDirection={onlySmallScreen ? "column" : "row"}
            >
              <Button
                variant="contained"
                startIcon={<KeyIcon />}
                sx={{ bgcolor: "#5C5470", "&:hover": { bgcolor: "#5C5470" } }}
              >
                Change Password
              </Button>
              <Button
                variant="contained"
                endIcon={<EmailIcon />}
                sx={{ bgcolor: "#5C5470", "&:hover": { bgcolor: "#5C5470" } }}
              >
                Change Email
              </Button>
            </Box>
            <Button
              variant="contained"
              sx={{ bgcolor: "#5C5470", "&:hover": { bgcolor: "#5C5470" } }}
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
