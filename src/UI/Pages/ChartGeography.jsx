import React from 'react'
import { Box, useTheme } from "MUI_Material";
import { tokens } from '../../Application/data/theme';
import { GeographyChart, Header } from '../Components';


export default function () {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            m='20px'
        >
            <Header title='Geography Chart' subtitle="Simple Chart Geography" />
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
                <GeographyChart />
            </Box>
        </Box>

    )
}