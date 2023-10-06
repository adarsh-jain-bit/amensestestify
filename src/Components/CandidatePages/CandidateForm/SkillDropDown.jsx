import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ChipsArray from "./ChipsArray";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function SkillDropDown() {
  const [personName, setPersonName] = React.useState([]);
  const [chips, setChips] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleAddChip = () => {
    setChips([...chips, ...personName]);
    setPersonName([]);
  };

  return (
    <div>
      <Stack display="flex" direction="row" gap={2} alignItems="center">
        <FormControl
          fullWidth
          sx={{
            fieldset: {
              borderColor: "black",
            },
          }}
        >
          <InputLabel
            id="demo-multiple-checkbox-label"
            sx={{
              top: "-6px",
              color: "black",
            }}
          >
            Skills
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            fullWidth
            value={personName}
            size="small"
            onChange={handleChange}
            onClose={handleAddChip}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      {chips.length > 0 && <ChipsArray chips={chips} setChips={setChips} />}
    </div>
  );
}
