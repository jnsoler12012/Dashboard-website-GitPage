import React from 'react'
import { Box } from "MUI_Material";
import { LineChart, Header } from '../Components';


export default function () {
    return (
        <Box
            m='20px'
        >
            <Header title='Line Chart' subtitle="Simple Char Line" />
            <Box height="75vh">
                <LineChart />
            </Box>
        </Box>

    )
}