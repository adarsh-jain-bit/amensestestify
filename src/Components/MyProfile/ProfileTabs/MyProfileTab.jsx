import React, { useState } from 'react';
import {
    Box,
    TextField,
    Typography,
    Autocomplete,
    Button,
    CssBaseline,
    Container,
    Stack,
} from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import KeyIcon from '@mui/icons-material/Key';
import EmailIcon from '@mui/icons-material/Email';
import Input from '../../Common/Input';
function MyProfileTab() {
    const [value, setValue] = useState('')

    const handleChange = (newValue) => {
        setValue(newValue)
    }
    return (

        <React.Fragment>
            <CssBaseline />
            <Container>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: '1%', width: '50ch' },
                        height: '60vh'
                    }}

                    noValidate
                    autoComplete="off"
                >
                    <Typography variant="h5" gutterBottom my='3%' sx={{ fontWeight: 'bolder' }}>
                        Personal information
                    </Typography>

                    <Stack direction='row' spacing='3%' ml='1%'>
                        <Input placeholder='First Name' variant='outlined' type='text' defaultValue="Deepesh" size='small' />
                        <Input placeholder='Last Name' variant='outlined' type='text' defaultValue="Trivedi" size='small' />
                    </Stack>





                    <MuiTelInput value={value} onChange={handleChange} id="outlined-required"
                        label="Phone Number" size='small' />
                    <Typography variant="h5" gutterBottom my='3%' sx={{ fontWeight: 'bolder' }}>
                        Language selection
                    </Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={languages}
                        renderInput={(params) => <TextField {...params} label="Language of Assessment" size='small' ml='1%' />}
                    />
                    <Box mt='3%' ml='2%'>
                        <Button variant="contained" startIcon={<KeyIcon />} sx={{ mr: '5%', bgcolor: '#5C5470', '&:hover': { bgcolor: '#5C5470' } }}>
                            Change Password
                        </Button>
                        <Button variant="contained" endIcon={<EmailIcon />} sx={{ bgcolor: '#5C5470', '&:hover': { bgcolor: '#5C5470' } }} >
                            Change Email
                        </Button>
                        <Button variant="contained" sx={{ ml: '36%', bgcolor: '#5C5470', '&:hover': { bgcolor: '#5C5470' } }}>
                            Save changes
                        </Button>
                    </Box>






                </Box>

            </Container>
        </React.Fragment >



    )
}

export default MyProfileTab

const languages = ["English", "Hindi", "Turkey", "Spanish"];
