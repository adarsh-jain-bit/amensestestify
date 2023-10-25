import React from "react";
import {
  Alert,
  CssBaseline,
  Container,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Stack,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
function NotificationTab() {
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
              The notification settings below apply to you only and not to any
              other users in this account. You only receive these notifications
              for every active assessment.
            </Alert>
            <FormGroup sx={{ marginBottom: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
                Notify me..
              </Typography>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Every time a candidate completes an assessmentl"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Every day with a summary of candidates that completed an assessment"
              />
            </FormGroup>

            <Button
              variant="contained"
              sx={{
                alignSelf: `${onlySmallScreen ? "center" : "flex-end"}`,
                bgcolor: "#5C5470",
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

export default NotificationTab;
