import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Stack from '@mui/material/Stack';
import MyProfileTab from './ProfileTabs/MyProfileTab';
import NotificationTab from './ProfileTabs/NotificationTab';

function ProfileSection() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Stack alignItems='center' mt={20}>
                <Box sx={{ width: '60%', height: '80%', typography: 'body1', backgroundColor: '#DAFFFB' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="My Profile" value="1" />
                                <Tab label="Notification" value="2" />
                                <Tab label="My Company" value="3" />
                                <Tab label="Task Management" value="4" />
                                <Tab label="Assessment settings" value="5" />
                            </TabList>
                        </Box>
                        <TabPanel value="1"><MyProfileTab /></TabPanel>
                        <TabPanel value="2"><NotificationTab /></TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                        <TabPanel value="4">Item Four</TabPanel>
                        <TabPanel value="5">Item Seven</TabPanel>
                    </TabContext>
                </Box>
            </Stack>

        </>

    );
}

export default ProfileSection
