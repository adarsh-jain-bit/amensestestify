import React from "react";
import CustomDropDown from "../../Common/CustomDropDown";
import {
  IconButton,
  InputBase,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Container,
  Button,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
import { height } from "@mui/system";

const MyAssessment = () => {
  const Assessment = ["Active", "Archived"];

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  const buttonStyle = {
    backgroundColor: "#5C5470",
    color: "white",
    height: "50px",
    width: "250px",
  };

  return (
    <Container>
      <Box sx={{ height: '91vh' }}>
        <Stack
          display="flex"
          justifyContent="space-between"
          direction="row"
          py={5} // Add padding top and bottom for spacing
        >
          <Typography variant="h6" fontWeight="700" fontFamily="sans-serif">
            My Assessments
          </Typography>
          <Stack display="flex" direction="row" gap={2}>
            <Button
              variant="outlined"
              startIcon={<AddCircleOutlineIcon />}
              style={buttonStyle}
            >
              <Link
                to="/NewAssessment"
                style={{ textDecoration: "none", color: "white" }}
              >
                Create new Assessment
              </Link>
            </Button>
          </Stack>
        </Stack>
        <Stack
          display="flex"
          justifyContent="space-between"
          direction="row"
          py={3} // Add padding top and bottom for spacing
          mb={5}
        >
          <Paper
            component="form"
            sx={{
              p: "2px 2px",
              display: "flex",
              alignItems: "center",
              width: 400,
              height: 60,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, height: "5px" }}
              placeholder="Search Assessment"
              inputProps={{ "aria-label": "Search Assessment" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <CustomDropDown
            width="200px"
            background="white"
            label="Language"
            data={Assessment}
          />
        </Stack>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default MyAssessment;
