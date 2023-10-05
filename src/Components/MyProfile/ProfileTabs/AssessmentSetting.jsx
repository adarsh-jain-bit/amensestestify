import React from 'react';
import Alert from '@mui/material/Alert';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'

function AssessmentSetting() {
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
                            These settings will be applied to all assessments including those created by other team members.
                        </Alert>
                        <FormGroup>

                            <FormControlLabel control={<Checkbox defaultChecked />} label="Request candidates anonymously to provide demographic details at the end of the assessment." />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Provide opportunity to leave feedback after every test." />
                            <FormControlLabel control={<Checkbox defaultChecked />} label=" Redirect candidates to a URL of your choice after finishing an assessment." />
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

export default AssessmentSetting