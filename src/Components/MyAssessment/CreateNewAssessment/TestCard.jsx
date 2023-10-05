import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 32 }} color="text.secondary" gutterBottom>
                Test Name
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Add</Button>
        </CardActions>
    </React.Fragment>
);

export default function TestCard() {
    return (
        <Box sx={{ minWidth: 350, minHeight: 300 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}