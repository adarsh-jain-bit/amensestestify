import React, { useState, useEffect } from "react";
import {
  Paper,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  ButtonGroup,
  Popper,
  Grow,
  ClickAwayListener,
  MenuList,
  useMediaQuery,
  useTheme,
  MenuItem,
  Container,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useNavigate, Link, useLocation } from "react-router-dom";
import {
  AccountCircle,
  Notifications,
  Business,
  Group,
  Settings,
  ExitToApp,
} from "@mui/icons-material"; // Import icons
import DrawerComp from "./DrawerComp";

const options = [
  { id: 1, title: "My Profile", icon: <AccountCircle /> },
  { id: 2, title: "Notifications", icon: <Notifications /> },
  { id: 3, title: "My Company", icon: <Business /> },
  { id: 4, title: "Team management", icon: <Group /> },
  { id: 5, title: "Assessment settings", icon: <Settings /> },
  { id: 7, title: "Log out", icon: <ExitToApp /> },
];
const Nav = () => {
  const nav = useNavigate();
  const location = useLocation();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleMenuItemClick = (option) => {
    const newOption = option.replace(/ /g, "");
    nav(`/${newOption}`);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // Set a consistent anchorOrigin and transformOrigin for Popper
  const popperAnchorOrigin = { vertical: "bottom", horizontal: "center" };
  const popperTransformOrigin = { vertical: "top", horizontal: "center" };
  const theme = useTheme();
  const isXlAndAboveDevices = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumAndBelowDevices = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallAndBelowDevices = useMediaQuery(theme.breakpoints.down("sm"));
  if (location.pathname === "/login") {
    return null;
  }
  return (
    <>
      <Container>
        <Stack
          justifyContent="space-between"
          height={isSmallAndBelowDevices ? "60px" : "80px"}
          display="flex"
          flexDirection="row"
          width="100%"
          padding={isSmallAndBelowDevices ? "7px" : undefined}
        >
          {isMediumAndBelowDevices ? (
            <>
              <Stack direction="row" alignItems="center" width="100%">
                <DrawerComp />
                <Typography
                  sx={{
                    color: "black",
                    fontSize: `${isSmallAndBelowDevices ? "18px" : "22px"}`,
                    fontWeight: "bold",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  TestGorilla
                </Typography>
              </Stack>
            </>
          ) : (
            <Stack
              // pl="5%"
              display="flex"
              alignItems="center"
              justifyContent="start"
              flexDirection="row"
              gap={2}
              width={
                isXlAndAboveDevices || isMediumAndBelowDevices ? "50%" : "70%"
              }
            >
              <Link to="/AssessmentPage">
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  TestGorilla
                </Typography>
              </Link>
              <List sx={{ display: "flex" }}>
                <ListItem disablePadding sx={{ maxWidth: "max-content" }}>
                  <ListItemButton>
                    <Link to="/MyAssessment">
                      <ListItemText
                        primary="My assessments"
                        sx={{
                          color: "black",
                        }}
                      />
                    </Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ maxWidth: "max-content" }}>
                  <ListItemButton component="a" href="#simple-list">
                    <Link to="/MyCandidates">
                      <ListItemText
                        primary="My candidates"
                        sx={{
                          color: "black",
                        }}
                      />
                    </Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ maxWidth: "max-content" }}>
                  <ListItemButton>
                    <Link to="/Tests">
                      <ListItemText
                        primary="Tests"
                        sx={{
                          color: "black",
                        }}
                      />
                    </Link>
                  </ListItemButton>
                </ListItem>
              </List>
            </Stack>
          )}
          {isSmallAndBelowDevices ? (
            ""
          ) : (
            <>
              <Stack
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
                flexDirection="row"
                width={
                  isXlAndAboveDevices
                    ? "30%"
                    : isSmallAndBelowDevices
                    ? "30%"
                    : "70%"
                }
              >
                {isXlAndAboveDevices || isMediumAndBelowDevices ? (
                  <>
                    <Stack
                      gap={1}
                      direction="row"
                      display={isSmallAndBelowDevices ? "none" : "flex"}
                    >
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          color: "black",
                          borderColor: "black",
                          height: "40px", // Adjust the height as needed
                          width: "120px",
                        }}
                      >
                        Talk to us
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          color: "black",
                          borderColor: "black",
                          height: "40px", // Adjust the height as needed
                          width: "120px",
                        }}
                      >
                        Upgrade
                      </Button>
                    </Stack>
                  </>
                ) : (
                  <>
                    <Stack
                      display="flex"
                      justifyContent="space-between"
                      direction="row"
                      gap={2}
                    >
                      <HeadphonesIcon />
                      <ArrowUpwardIcon />
                    </Stack>
                  </>
                )}
                {isSmallAndBelowDevices ? (
                  ""
                ) : (
                  <>
                    <ButtonGroup ref={anchorRef} aria-label="split button">
                      <Button
                        endIcon={<ArrowDropDownIcon />}
                        variant="text"
                        onClick={handleToggle}
                        sx={{
                          color: "black",
                          borderColor: "black",
                        }}
                      >
                        Name
                      </Button>
                    </ButtonGroup>
                    <Popper
                      sx={{
                        zIndex: 2,
                      }}
                      open={open}
                      anchorEl={anchorRef.current}
                      role={undefined}
                      transition
                      disablePortal
                      anchorOrigin={popperAnchorOrigin}
                      transformOrigin={popperTransformOrigin}
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom"
                                ? "center top"
                                : "center bottom",
                          }}
                        >
                          <Paper sx={{ ml: 10, mt: 1.5 }}>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList id="split-button-menu" autoFocusItem>
                                {options.map((option, index) => (
                                  <MenuItem
                                    key={option.id}
                                    onClick={() =>
                                      handleMenuItemClick(option.title)
                                    }
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      padding: "8px", // Add space around the icon and text
                                      marginBottom: "10px", // Add space between cards
                                      fontSize: "13px", // Set the font size to small
                                    }}
                                  >
                                    <span
                                      style={{ marginRight: "10px" }}
                                    ></span>
                                    {option.icon}
                                    <span
                                      style={{ marginRight: "30px" }}
                                    ></span>
                                    {option.title}
                                    <span
                                      style={{ marginRight: "10px" }}
                                    ></span>
                                  </MenuItem>
                                ))}
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </>
                )}
              </Stack>
            </>
          )}
        </Stack>
      </Container>
    </>
  );
};

export default Nav;
