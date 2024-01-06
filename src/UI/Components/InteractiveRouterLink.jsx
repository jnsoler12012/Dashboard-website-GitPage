import React from 'react'
import { Interactive } from 'react-interactive'

export default function ({ as, href, to, children, style, className }) {
    if (href)
        return (<Interactive as={as} href={href} style={style} className={className}>
            {children}
        </Interactive>)
    else
        return (<Interactive as={as} to={to} style={style} className={className}>
            {children}
        </Interactive>)

}