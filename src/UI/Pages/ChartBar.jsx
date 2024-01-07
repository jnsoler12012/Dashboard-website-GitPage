import React from 'react'
import { Box } from "MUI_Material";
import { BarChart, Header } from '../Components';


export default function () {
    return (
        <Box
            m='20px'
        >
            <Header title='Bar Chart' subtitle="Simple Char Bar" />
            <Box height="75vh">
                <BarChart />
            </Box>
        </Box>

    )
}