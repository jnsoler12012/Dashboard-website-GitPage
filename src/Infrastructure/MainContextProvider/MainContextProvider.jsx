import React, { createContext, useEffect, useMemo, useRef, useState } from 'react'

export const MainContext = createContext();

export default function ({ children }) {
    const sidebar = useRef(null);

    const sizeRef = React.useCallback(
        (node) => {
            if (sidebar !== null) {
                sidebar.current = node;
                observer.observe(node);
            } else {
                observer.unobserve(sidebar.current);
                sidebar.current = null;
            }
        },
        [observer]
    );

    const [mainValues, setMainValues] = useState({
        sidebar: {
            ref: sizeRef,
            width: 0,
            height: 0
        }
    })

    const observer = useMemo(
        () =>
            new ResizeObserver((entries) => {
                setMainValues((preValues) => {
                    return ({
                        ...preValues,
                        sidebar: {
                            ...preValues.sidebar,
                            width: entries[0].target.getBoundingClientRect().width,
                            height: entries[0].target.getBoundingClientRect().height,
                        }
                    })
                })
            }),
        []
    );

    return (
        <MainContext.Provider value={{
            mainValues, setMainValues
        }}>
            {children}
        </MainContext.Provider>
    )
}