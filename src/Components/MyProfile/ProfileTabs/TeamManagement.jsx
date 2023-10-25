import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(id, type, name, email, action) {
  return { id, type, name, email, action };
}

const rows = [
  createData(1, "Owner", "Divyandh Thankur", "divyansh@amenses.com"),
  createData(2, "Tech lead", "Kishan Abhisekh", "kishan@amenses.com"),
  createData(3, "Developer", "Deepesh Trivedi", "deepesh@amenses.com"),
  createData(4, "HR manager", "Aadarsh Jain", "aadarsh@amenses.com"),
  createData(5, "Recruiter", "Khushi jha", "khushi@amenses.com"),
];
function TeamManagement() {
  const theme = useTheme();
  const onlyMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [numUser, setNumUser] = useState(1);
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
          <Stack
            direction="row"
            justifyContent="space-between"
            mt="1%"
            mb="2%"
            gap={2}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bolder", width: "60%" }}
              gutterBottom
            >
              Add or remove team members
            </Typography>
            <Box width="40%">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#5C5470",
                  width: `${!onlyMediumScreen ? "60%" : "102%"}`,
                  "&:hover": { bgcolor: "#5C5470" },
                }}
              >
                <AddCircleOutlineIcon sx={{ mx: "0.5%" }} />
                Add Users {numUser}/5
              </Button>
            </Box>
          </Stack>
          {/* <TableContainer component={Paper}>
            <Table sx={{ minWidth: "70%" }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right">ID</StyledTableCell>
                  <StyledTableCell align="right">Type</StyledTableCell>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">Email</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row" align="right">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.type}</StyledTableCell>
                    <StyledTableCell align="right">{row.name}</StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">
                      <IconButton aria-label="Email">
                        <EmailIcon />
                      </IconButton>
                      <IconButton aria-label="edit">
                        <ModeEditIcon />
                      </IconButton>
                      <IconButton aria-label="remove">
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default TeamManagement;
