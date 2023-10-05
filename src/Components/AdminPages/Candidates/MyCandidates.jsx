import React from "react";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const MyCandidates = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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

  return (
    <Container>
      <Stack
        display="flex"
        justifyContent="space-between"
        direction="row"
        py={5} // Add padding top and bottom for spacing
      >
        <Typography variant="h5" fontWeight="700" fontFamily="sans-serif">
          Tests
        </Typography>
        <Stack display="flex" direction="row" gap={2}>
          <Button variant="outlined" startIcon={<AddCircleOutlineIcon />}>
            Create new Assessment
          </Button>
        </Stack>
      </Stack>
      <Stack
        display="flex"
        justifyContent="space-between"
        direction="row"
        py={3} // Add padding top and bottom for spacing
      >
        <Paper
          component="form"
          sx={{
            m: "21px",
            display: "flex",
            alignItems: "center",
            width: 500,
            height: 55,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, height: "5px", m: 1 }}
            placeholder="Search Assessment"
            inputProps={{ "aria-label": "Search Assessment" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

        <Stack display="flex" direction="row" gap={1}>
          <FormControl sx={{ m: 3, minWidth: 240 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Assessments
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Assessments"
              onChange={handleChange}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Archived">Archived</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 3, minWidth: 240 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Assessments
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Assessments"
              onChange={handleChange}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Archived">Archived</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 3, minWidth: 240 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Assessments
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Assessments"
              onChange={handleChange}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Archived">Archived</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
    </Container>
  );
};

export default MyCandidates;
