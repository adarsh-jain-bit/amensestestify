import React from "react";
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
  MenuItem,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@mui/material/styles"; // Import useTheme from Material-UI
import { useNavigate, Link } from "react-router-dom";

const options = [
  { id: 1, title: "My Profile" },
  { id: 2, title: "Notifications" },
  { id: 3, title: "My Company" },
  { id: 4, title: "Team management" },
  { id: 5, title: "Assessment settings" },
  { id: 6, title: "Refer & earn" },
  { id: 7, title: "Log out" },
];

function Navbar() {
  const theme = useTheme();
  const nav = useNavigate();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleMenuItemClick = (option) => {
    const newOption = option.replace(/ /g, "");
    nav(`/${newOption}`);
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

  return (
    <Paper elevation={3}>
      <Stack
        justifyContent="space-between"
        height={80}
        display="flex"
        flexDirection="row"
      >
        <Stack
          pl="10%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
          width="45%"
        >
          <Link to="/">
            <Typography
              sx={{ color: "black", fontSize: "22px", fontWeight: "bold" }}
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
        <Stack
          pr="7%"
          width="35%"
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          flexDirection="row"
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
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu" autoFocusItem>
                      {options.map((option, index) => (
                        <MenuItem
                          key={option.id}
                          selected={index === selectedIndex}
                          onClick={() => handleMenuItemClick(option.title)}
                        >
                          {option.title}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default Navbar;
