import * as React from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import { Stack } from "@mui/system";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import TranslateIcon from "@mui/icons-material/Translate";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { Typography } from "@mui/material";
export default function VerticalDividers() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "fit-content",
          mt: 3,
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: "background.paper",
          color: "text.secondary",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <Stack p="5px 10px" width="90px">
          <ChecklistIcon />
          <Typography fontSize="15px">Type</Typography>
          <Typography fontSize="12px" flexWrap="wrap">
            Role specific skills
          </Typography>
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack p="5px 10px" width="90px">
          <TranslateIcon />
          <Typography fontSize="15px">Time</Typography>
          <Typography fontSize="12px">10 mins</Typography>
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack p="5px 10px" width="90px">
          <AccessAlarmIcon />
          <Typography fontSize="15px">Language</Typography>
          <Typography fontSize="12px">English</Typography>
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack p="5px 10px" width="90px">
          <SignalCellularAltIcon />
          <Typography fontSize="15px">Level</Typography>
          <Typography fontSize="12px">Intermediate</Typography>
        </Stack>
      </Box>
    </div>
  );
}
