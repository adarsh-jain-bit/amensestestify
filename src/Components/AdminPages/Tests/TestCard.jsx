import React from "react";
import { Stack, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import VisibilityIcon from "@mui/icons-material/Visibility";
const Button = styled("button")({
  letterSpacing: "1px",
  borderRadius: "5px",
  border: "none",
  outline: "none",
  cursor: "pointer",
  transition: "0.6s",
  color: "#FFFFFF",
  padding: "10px",
});
const Item = styled(Paper)({
  width: "100%",
  background: "white",
  padding: "20px",
});
const TestCard = ({ index }) => {
  return (
    <Grid item xs={3} key={index}>
      <Item elevation={4}>
        <Stack gap={1}>
          <Typography fontWeight={700}>.NET</Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quas,
            commodi doloremque reprehenderit aperiam velit?Lorem ipsum dolor sit
            amet.
          </Typography>
          <Typography display="flex" alignItems="center" gap={1}>
            <AccessAlarmsIcon fontSize="15px" />
            10 mins
          </Typography>
          <Grid display="flex" justifyContent="space-between">
            <Stack display="flex" gap={1} direction="row">
              <Button sx={{ padding: "5px 10px", background: "#EDEDED" }}>
                <VisibilityIcon style={{ color: "#636e72" }} />
              </Button>
              <Button
                sx={{
                  padding: "5px 8px",
                  background: "#EDEDED",
                  color: "black",
                }}
              >
                Details
              </Button>
            </Stack>
            <Button
              sx={{
                padding: "5px 8px",
                background: "#ee5253",
                color: "white",
                p: "5px 10px",
              }}
            >
              Add
            </Button>
          </Grid>
        </Stack>
      </Item>
    </Grid>
  );
};

export default TestCard;
