import React from 'react'



import { Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';


import StepperStep from './StepperStep';

function NewAssessment() {


    return (
        <div>
            <Container maxWidth='lg'>
                <Stack direction='row' mt={16} mb={10}>
                    <Typography variant='body1' fontSize={32} fontWeight={'bold'} >Create new assessment</Typography>
                </Stack>

                <StepperStep />

            </Container>



        </div >
    )
}

export default NewAssessment


