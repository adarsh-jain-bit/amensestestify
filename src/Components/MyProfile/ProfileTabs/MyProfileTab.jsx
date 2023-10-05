import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { MuiTelInput } from 'mui-tel-input'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button';
import KeyIcon from '@mui/icons-material/Key';
import EmailIcon from '@mui/icons-material/Email';

function MyProfileTab() {
    const [value, setValue] = useState('')

    const handleChange = (newValue) => {
        setValue(newValue)
    }
    return (


        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '50ch', height: '12ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h5" gutterBottom my={5}>
                Personal information
            </Typography>

            <TextField
                required
                id="outlined-required"
                label="First name"
                defaultValue="Deepesh"

            />
            <TextField
                required
                id="outlined-required"
                label="Last name"
                defaultValue="Trivedi"

            />



            <MuiTelInput value={value} onChange={handleChange} id="outlined-required"
                label="Phone Number" />
            <Typography variant="h5" gutterBottom mb={5}>
                Language selection
            </Typography>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={languages}
                renderInput={(params) => <TextField {...params} label="Language of Assessment" />}
            />


            <Button variant="contained" startIcon={<KeyIcon />} sx={{ mr: 5 }}>
                Change Password
            </Button>
            <Button variant="contained" endIcon={<EmailIcon />} >
                Change Email
            </Button>
            <Button variant="contained" sx={{ ml: 60 }}>
                Save changes
            </Button>




        </Box>



    )
}

export default MyProfileTab

const languages = ["English", "Hindi", "Turkey", "Spanish"];
