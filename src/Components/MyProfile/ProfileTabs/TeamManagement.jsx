import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
function TeamManagement() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Box sx={{ height: '60vh' }} >
                    <Typography variant="h6" sx={{ fontWeight: 'bolder' }} gutterBottom>
                        Add or remove team members
                    </Typography>
                    <Button variant="contained">Contained</Button>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default TeamManagement
