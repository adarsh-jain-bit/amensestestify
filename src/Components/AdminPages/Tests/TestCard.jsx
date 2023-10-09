import React from "react";
import { Stack, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DetailModal from "../../Common/Modal/DetailModal";

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
  minHeight: "300px", // Adjust the height as needed
});

const TestCard = ({ index }) => {
  return (
    <Grid item xs={3} key={index} mb="20px">
      <Item elevation={4}>
        <Stack gap={1}>
          <Typography fontWeight={700} mb="20px">
            .NET
          </Typography>
          <Typography variant="p" mb="20px">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quas,
            commodi doloremque reprehenderit aperiam velit?Lorem ipsum dolor sit
            amet.
          </Typography>
          <Typography display="flex" alignItems="center" gap={1}>
            <AccessAlarmsIcon fontSize="15px" mb="20px" />
            10 mins
          </Typography>
          <Grid display="flex" justifyContent="space-between">
            <Stack display="flex" gap={1} direction="row">
              <Button sx={{ padding: "5px 10px", background: "#EDEDED" }}>
                <VisibilityIcon style={{ color: "#636e72" }} />
              </Button>
              {/* detail button */}
              <DetailModal />
            </Stack>
            <Button
              sx={{
                padding: "5px 8px",
                background: "#5C5470",
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
