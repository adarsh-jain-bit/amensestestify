import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { MuiTelInput } from 'mui-tel-input'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button';
import KeyIcon from '@mui/icons-material/Key';
import EmailIcon from '@mui/icons-material/Email';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
function MyProfileTab() {
    const [value, setValue] = useState('')

    const handleChange = (newValue) => {
        setValue(newValue)
    }
    return (

        <React.Fragment>
            <CssBaseline />
            <Container fixed>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 2, width: '50ch' },
                        height: '60vh'
                    }}

                    noValidate
                    autoComplete="off"
                >
                    <Typography variant="h5" gutterBottom my={5} sx={{ fontWeight: 'bolder' }}>
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
                    <Typography variant="h5" gutterBottom my={3} sx={{ fontWeight: 'bolder' }}>
                        Language selection
                    </Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={languages}
                        renderInput={(params) => <TextField {...params} label="Language of Assessment" />}
                    />
                    <Box mt={3}>
                        <Button variant="contained" startIcon={<KeyIcon />} sx={{ mr: 5, bgcolor: '#46A997', '&:hover': { bgcolor: '#46A997' } }}>
                            Change Password
                        </Button>
                        <Button variant="contained" endIcon={<EmailIcon />} sx={{ bgcolor: '#46A997', '&:hover': { bgcolor: '#46A997' } }} >
                            Change Email
                        </Button>
                        <Button variant="contained" sx={{ ml: 60, bgcolor: '#46A997', '&:hover': { bgcolor: '#46A997' } }}>
                            Save changes
                        </Button>
                    </Box>






                </Box>

            </Container>
        </React.Fragment>



    )
}

export default MyProfileTab

const languages = ["English", "Hindi", "Turkey", "Spanish"];
