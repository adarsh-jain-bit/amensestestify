import React from 'react'



import { Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';


import StepperStep from './StepperStep';

function NewAssessment() {


    return (
        <div>
            <Container maxWidth='lg' >
                <Stack direction='row' mt='1%' mb='6%'>
                    <Typography variant='h4' fontWeight='bold' >Create new assessment</Typography>
                </Stack>

                <StepperStep />

            </Container>



        </div >
    )
}

export default NewAssessment


