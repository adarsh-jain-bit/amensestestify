import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
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

function createData(testId, testName, testTime) {
  return { testId, testName, testTime };
}

const rows = [
  createData(1, "Angular.js", 15),
  createData(2, "Node.js", 15),
  createData(3, "Next.js", 15),
  createData(4, "React.js", 15),
  createData(5, "Vue.js", 15),
];
function AssessmentStage3rd() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Test ID</StyledTableCell>
            <StyledTableCell align="center">Test Name</StyledTableCell>
            <StyledTableCell align="center">Test Time</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.testId}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.testId}
              </StyledTableCell>
              <StyledTableCell align="center">{row.testName}</StyledTableCell>
              <StyledTableCell align="center">
                {row.testTime} mins
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button>
                  <DeleteIcon />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AssessmentStage3rd;
