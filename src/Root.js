import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { Outlet } from "react-router-dom";

export default function Root(){
    return(
        <div>
        <Outlet/>
        <Box className={"customize-fab"} sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab variant="extended" onClick={() => alert("customization feature coming soon!")}>
                <EditIcon sx={{ mr: 1 }} />
                Customize
            </Fab>
        </Box>
        </div>
    )
}