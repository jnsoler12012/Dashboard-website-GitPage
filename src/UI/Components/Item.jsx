import React from 'react'
import { MenuItem } from "react-pro-sidebar";
import { Link } from 'react-router-dom';

import { tokens } from "DataCustom/theme";
import { Typography, useTheme } from 'MUI_Material';
import InteractiveRouterLink from './InteractiveRouterLink';

export default function ({ title, to, icon, selected, setSelected }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <InteractiveRouterLink as={Link} to={to} style={{ textDecoration: 'none' }} className={'transparentBackground'}>
            <MenuItem
                active={selected === title}
                style={{
                    color: colors.grey[100],
                    padding: 0
                }}
                onClick={() => setSelected(title)}
                icon={icon}
                component={<div></div>}
            >
                <Typography>{title}</Typography>
            </MenuItem>
        </InteractiveRouterLink>

    );
}

