import React from 'react'
import { Box } from "MUI_Material";
import { PieChart, Header } from '../Components';


export default function () {
    return (
        <Box
            m='20px'
        >
            <Header title='Pie Chart' subtitle="Simple Char Bar" />
            <Box height="75vh">
                <PieChart />
            </Box>
        </Box>

    )
}