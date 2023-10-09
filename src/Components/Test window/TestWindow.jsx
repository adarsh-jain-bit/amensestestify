import React, { useState } from "react";
import {
    Typography,
    Box,
    Button,
    Stack,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function TestWindow() {
    const [isChecked, setIsChecked] = useState("");

    const handleCheck = (event) => {
        setIsChecked(event.target.value);
    };

    return (
        <Box sx={{ width: "100vw", height: "100vh", bgcolor: "rgb(245,246,246)" }}>
            <Box sx={{ width: "100%", height: "6.2%", bgcolor: "#FFFFFF" }}>

                <Stack
                    direction="row"
                    justifyContent="space-around"
                    alignItems="baseline"
                    sx={{ my: "1%" }}
                    spacing={90}
                >
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ fontWeight: "bold", mb: 0 }}
                    >
                        Amenses Innovation
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "#5C5470",
                            px: "2%",
                            "&:hover": { bgcolor: "#5C5470" },
                        }}
                    >
                        <Typography
                            variant="h"
                            gutterBottom
                            sx={{ mr: "20%", mb: 0, fontWeight: "bold" }}
                        >
                            Next
                        </Typography>
                        <ArrowForwardIcon />
                    </Button>
                </Stack>
            </Box>

            <Box
                sx={{
                    m: "5%",
                    width: "80%",
                    height: "70%",
                    bgcolor: "#FFFFFF",
                    mx: "auto",
                }}
            >
                <Stack direction="row" justifyContent="space-around">
                    <Box sx={{ width: "40%", height: "50%", my: "5%" }}>
                        <Typography variant="h6">
                            There are two teams working on the same project and the deadline
                            for submission of deliverables is the same for both the teams.
                        </Typography>
                        <Typography variant="h6" fontWeight="bold" mt="5%">
                            What type of project should you set up for them?
                        </Typography>
                    </Box>
                    <Box sx={{ width: "40%", height: "50%", my: "5%" }}>
                        <FormControl sx={{ width: "100%", height: "100%" }}>
                            <FormLabel id="demo-radio-buttons-group-label">
                                <Typography variant="h5" color="black">Select only one</Typography>
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={isChecked}
                                onChange={handleCheck}
                                name="radio-buttons-group"
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "10%",
                                        border: "2px solid #F5F6F6",
                                        my: "2%",
                                        p: "3%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        "&:hover": { border: "2px solid #46A997" },
                                        bgcolor: isChecked === "Scrum project with parallel sprints" ? "#46A997" : "#FFFFFF",
                                    }}
                                >
                                    <FormControlLabel
                                        value="Scrum project with parallel sprints"
                                        control={<Radio />}
                                        label="Scrum project with parallel sprints"
                                        sx={{ width: "100%", color: 'black' }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "10%",
                                        border: "2px solid #F5F6F6",
                                        my: "2%",
                                        p: "3%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        "&:hover": { border: "2px solid #46A997" },
                                        bgcolor: isChecked === "KanBan project with parallel sprints" ? "#46A997" : "#FFFFFF",
                                    }}
                                >
                                    <FormControlLabel
                                        value="KanBan project with parallel sprints"
                                        control={<Radio />}
                                        label="KanBan project with parallel sprints"
                                        sx={{ width: "100%" }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "10%",
                                        border: "2px solid #F5F6F6",
                                        my: "2%",
                                        p: "3%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        "&:hover": { border: "2px solid #46A997" },
                                        bgcolor: isChecked === "Scrum project with two boards, one for each team" ? "#46A997" : "#FFFFFF",
                                    }}
                                >
                                    <FormControlLabel
                                        value="Scrum project with two boards, one for each team"
                                        control={<Radio />}
                                        label="Scrum project with two boards, one for each team"
                                        sx={{ width: "100%" }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "10%",
                                        border: "2px solid #F5F6F6",
                                        my: "2%",
                                        p: "3%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: 'black',
                                        "&:hover": { border: "2px solid #46A997" },
                                        bgcolor: isChecked === "KanBan project with two boards, one for each team" ? "#46A997" : "#FFFFFF",
                                    }}
                                >
                                    <FormControlLabel
                                        value="KanBan project with two boards, one for each team"
                                        control={<Radio
                                        />}
                                        label="KanBan project with two boards, one for each team"
                                        sx={{ width: "100%" }}
                                    />
                                </Box>
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}

export default TestWindow;
