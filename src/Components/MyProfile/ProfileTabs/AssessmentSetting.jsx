import React from "react";
import Alert from "@mui/material/Alert";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
function AssessmentSetting() {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box
          sx={{
            "& .MuiTextField-root": { m: "1%", width: "50ch" },
            height: "60vh",
          }}
        >
          <Stack alignItems="flex-start">
            <Alert severity="info" sx={{ mb: "8%" }}>
              These settings will be applied to all assessments including those
              created by other team members.
            </Alert>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Request candidates anonymously to provide demographic details at the end of the assessment."
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Provide opportunity to leave feedback after every test."
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label=" Redirect candidates to a URL of your choice after finishing an assessment."
              />
            </FormGroup>

            <Button
              variant="contained"
              sx={{
                alignSelf: `${onlySmallScreen ? "center" : "flex-end"}`,
                bgcolor: "#5C5470",
                mt: 2,
                "&:hover": { bgcolor: "#5C5470" },
              }}
            >
              Save changes
            </Button>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default AssessmentSetting;
