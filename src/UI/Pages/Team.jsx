import React from 'react'
import { Box, Typography, useTheme } from 'MUI_Material'
import { DataGrid } from 'MUI_Data_Grid'
import { tokens } from '../../Application/data/theme'
import { mockDataTeam } from '../../Application/data/mocks'

import { MdOutlineAdminPanelSettings, MdOutlineLockOpen, MdOutlineSecurity } from "Web_React_Icons/md";
import { Header } from '../Components'


export default function () {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "accessLevel",
            headerName: "Access Level",
            flex: 1,
            cellClassName: "access-column--cell",
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width=
                        {{
                            md: "9rem",
                            xs: "6rem"
                        }}
                        m="0 auto"
                        p={{
                            md: "3px 2rem",
                            xs: "3px 3px"
                        }}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems='center'
                        justifySelf='flex-start'
                        backgroundColor={
                            access === "admin"
                                ? colors.greenAccent[600]
                                : access === "manager"
                                    ? colors.greenAccent[700]
                                    : colors.greenAccent[700]
                        }
                        borderRadius="4px"
                    >
                        {access === "admin" && <MdOutlineAdminPanelSettings size={25} />}
                        {access === "manager" && <MdOutlineSecurity size={25} />}
                        {access === "user" && <MdOutlineLockOpen size={25} />}
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box m='20px'>
            <Header title='TEAM' subtitle='Managing the Team Members' />
            <Box
                m='40px 0 0 0'
                height='75vh'
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .access-column--cell": {
                        display: 'grid !important'
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                }}
            >
                <DataGrid rows={mockDataTeam} columns={columns} />
            </Box>
        </Box>
    )
}