import React, { useContext } from 'react'
import { InputBase, Box, IconButton, useTheme } from "MUI_Material";
import { MdOutlineDarkMode, MdLightMode, MdOutlineSearch } from "Web_React_Icons/md";
import { IoMdNotificationsOutline } from "Web_React_Icons/io";
import { IoSettingsOutline, IoPersonOutline } from "Web_React_Icons/io5";

import { tokens } from 'DataCustom/theme';
import { ColorModeContext } from '../../../Infrastructure/MUIThemeProvider';


export default function () {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)


    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <MdOutlineSearch />
                </IconButton>
            </Box>
            <Box display='flex'>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {
                        theme.palette.mode === 'dark' ? <MdOutlineDarkMode size={23}/> : <MdLightMode size={23}/>
                    }
                </IconButton>
                <IconButton>
                    <IoMdNotificationsOutline size={23}/>
                </IconButton>
                <IconButton>
                    <IoSettingsOutline size={23}/>
                </IconButton>
                <IconButton>
                    <IoPersonOutline size={23}/>
                </IconButton>
            </Box>
        </Box>
    )
}