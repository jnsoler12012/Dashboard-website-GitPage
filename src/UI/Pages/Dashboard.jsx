import { Box } from 'MUI_Material'
import React from 'react'
import { Header } from '../Components'

export default function () {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems='center'>
                <Header title='DASHBOARD' subtitle='Welcome to your Dashboard' />
            </Box>
        </Box>
    )
}