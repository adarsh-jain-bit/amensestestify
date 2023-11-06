import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Stack from "@mui/material/Stack";
import { useMediaQuery } from "@mui/material";
import MyProfileTab from "./ProfileTabs/MyProfileTab";
import NotificationTab from "./ProfileTabs/NotificationTab";
import AssessmentSetting from "./ProfileTabs/AssessmentSetting";
import TeamManagement from "./ProfileTabs/TeamManagement";
import MyCompany from "./ProfileTabs/MyCompany";
import { useLocation } from "react-router-dom";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import { useTheme } from "@mui/material/styles";
function ProfileSection({ tabs, value }) {
  const [newValue, setNewValue] = useState(value);
  const location = useLocation();
  const theme = useTheme();
  const onlyMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleChange = (event, newValue) => {
    setNewValue(newValue);
  };

  useEffect(() => {
    // console.log("Route changed to:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Box sx={{ height: "91vh" }}>
        <Stack alignItems="center" bgcolor="#F5F6F6">
          <Box
            sx={{
              width: `${onlyMediumScreen ? "90%" : "80%"}`,
              height: "80%",
              typography: "body1",
              backgroundColor: "#FFFFFF",
              my: 10,
              pb: 5,
            }}
          >
            <TabContext value={newValue}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="lab API tabs example"
                >
                  <Tab label="My Profile" value="1" sx={{ flexGrow: 1 }} />
                  <Tab label="Notification" value="2" sx={{ flexGrow: 1 }} />
                  <Tab label="My Company" value="3" sx={{ flexGrow: 1 }} />
                  <Tab label="Team Management" value="4" sx={{ flexGrow: 1 }} />
                  <Tab
                    label="Assessment settings"
                    value="5"
                    sx={{ flexGrow: 1 }}
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
                <MyProfileTab />
              </TabPanel>
              <TabPanel value="2">
                <NotificationTab />
              </TabPanel>
              <TabPanel value="3">
                <MyCompany />
              </TabPanel>
              <TabPanel value="4">
                <TeamManagement />
              </TabPanel>
              <TabPanel value="5">
                <AssessmentSetting />
              </TabPanel>
            </TabContext>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default ProfileSection;
