import React from "react";
import { Typography, Box, useTheme } from "MUI_Material";
import { tokens } from "DataCustom/theme";

export default function ({ title, subtitle }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return (
        <Box mb="30px">
            <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ mb: "5px" }}>
                {title}
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[400]}>
                {subtitle}
            </Typography>
        </Box >
    )
}
