import React from 'react'
import Alert from '@mui/material/Alert';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
function NotificationTab() {
    return (

        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Box
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch' },
                        height: '60vh'
                    }}

                >
                    <Stack alignItems='flex-start'>
                        <Alert severity="info" sx={{ mb: 8 }}>
                            The notification settings below apply to you only and not to any other users in this account.
                            You only receive these notifications for every active assessment.
                        </Alert>
                        <FormGroup>
                            <Typography variant="h6" sx={{ fontWeight: 'bolder' }}>
                                Notify me..
                            </Typography>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Every time a candidate completes an assessmentl" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Every day with a summary of candidates that completed an assessment" />
                        </FormGroup>

                        <Button variant="contained" sx={{ alignSelf: 'flex-end' }}>
                            Save changes
                        </Button>



                    </Stack>

                </Box>

            </Container>
        </React.Fragment >

    )
}

export default NotificationTab
