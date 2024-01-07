import React from 'react'
import { MenuItem } from "react-pro-sidebar";
import { Link } from 'react-router-dom';

import { tokens } from "DataCustom/theme";
import { Typography, useTheme } from 'MUI_Material';
import InteractiveRouterLink from './InteractiveRouterLink';

export default function ({ title, to, icon, selected, setSelected }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const checkRouteIsPresent = () => {
        const toString = to.split('/')[1]

        const finalStringRoute = window.location.href.split('/')


        console.log(toString, '-separator-', finalStringRoute[finalStringRoute.length - 1], (toString === finalStringRoute[finalStringRoute.length - 1]))

        return (toString === finalStringRoute[finalStringRoute.length - 1])
    }


    return (
        <InteractiveRouterLink as={Link} to={to} style={{ textDecoration: 'none' }} className={'transparentBackground'}>
            <MenuItem

                active={selected === title}
                style={{
                    color: colors.grey[100],
                    padding: '0px',
                }}
                onClick={() => setSelected(title)}
                icon={icon}
                component={
                    <div style={{
                        color: (checkRouteIsPresent()) ? colors.blueAccent[300] : colors.grey[300]
                    }}>

                    </div>
                }
            >
                <Typography>{title}</Typography>
            </MenuItem>
        </InteractiveRouterLink>

    );
}