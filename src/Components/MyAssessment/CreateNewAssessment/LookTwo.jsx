import React, { useState } from 'react'
import TestCard from './TestCard';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));
function LookTwo() {
    const [chipData, setChipData] = useState([
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
    ]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <div>
            <Stack direction='row' justifyContent='center' spacing={5} mb={10}>
                <Paper
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        listStyle: 'none',
                        p: 0.5,
                        m: 0,
                        width: 1200,
                        height: 70,
                    }}
                    component="ul"
                >
                    {chipData.map((data) => {
                        let icon;

                        return (
                            <ListItem key={data.key}>
                                <Box component="span" sx={{ p: 1.5, border: '1px dashed grey', mx: 3 }}>
                                    <Chip
                                        icon={icon}
                                        label={data.label}
                                        onDelete={handleDelete(data)}
                                        color="primary" variant="outlined" size='large'
                                        sx={{ ml: 4, border: 'none', my: 2, fontSize: 20, mx: 2 }}
                                    />
                                </Box>

                            </ListItem>
                        );
                    })}
                </Paper>
            </Stack>
            <Stack direction='row' justifyContent='space-between' mb={10}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={testType}

                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Test Type" />}
                />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={testName}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Test Name" />}
                />
            </Stack>

            <Stack direction='row' justifyContent='space-between' flexWrap="wrap">
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
            </Stack>

        </div>
    )
}

export default LookTwo

const testType = ["My company Test", "Cognitive Test", "Personality & Culture", "Programming Skill"];
const testName = ["My company Test", "Cognitive Test", "Personality & Culture", "Programming Skill"];
