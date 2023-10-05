import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
function LookOne() {

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '1152px' },
                }}
                noValidate
                autoComplete="off"
            >

                <Stack alignItems='center'>
                    <TextField
                        fullWidth
                        required
                        id="fullWidth"
                        label="Name of Assessment"

                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={languages}
                        renderInput={(params) => <TextField {...params} label="Language of Assessment" />}
                    />
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={jobRoles}
                        renderInput={(params) => <TextField {...params} label="Job Roles" />}
                    />
                </Stack>



            </Box>
        </div>
    )
}

export default LookOne


const languages = ["English", "Hindi", "Turkey", "Spanish"];
const jobRoles = ['Frontend Developer', 'Backend Developer', 'FullStack Developer', 'Java Developer'];