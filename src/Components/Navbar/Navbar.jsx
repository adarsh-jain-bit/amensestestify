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
  "My Profile",
  "Notifications",
  "My Company",
  "Team management",
  "Assessment settings",
  "Refer & earn",
  "Log out",
];

function Navbar() {
  const theme = useTheme();
  const nav = useNavigate();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleMenuItemClick = (option) => {
    console.log(`/${option}`);
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
          pl="7%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
          width="40%"
        >
          <Typography>TestGorilla</Typography>
          <List sx={{ display: "flex" }}>
            <ListItem disablePadding sx={{ maxWidth: "max-content" }}>
              <ListItemButton>
                <ListItemText primary="My assessments" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ maxWidth: "max-content" }}>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="My candidates" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ maxWidth: "max-content" }}>
              <ListItemButton>
                <ListItemText primary="Tests" />
              </ListItemButton>
            </ListItem>
          </List>
        </Stack>
        <Stack
          pr="7%"
          width="30%"
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          flexDirection="row"
        >
          <Button
            variant="outlined"
            size="small"
          // sx={{ color: theme.palette.secondary.black }}
          >
            Talk to us
          </Button>
          <Button variant="outlined" size="small">
            Upgrade
          </Button>
          <ButtonGroup
            // variant="contained"
            ref={anchorRef}
            aria-label="split button"
          >
            <Button
              endIcon={<ArrowDropDownIcon />}
              // size="small"
              // aria-controls={open ? "split-button-menu" : undefined}
              // aria-expanded={open ? "true" : undefined}
              // aria-haspopup="menu"
              variant="text"
              onClick={handleToggle}
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
                          key={option}
                          // onClick={() => handleNavigation(option)}
                          selected={index === selectedIndex}
                          onClick={() => handleMenuItemClick(option)}
                        >
                          {option}
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
