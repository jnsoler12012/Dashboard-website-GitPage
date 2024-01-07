import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Box, useTheme, Typography } from "MUI_Material";
import { MdOutlineExpandMore } from "Web_React_Icons/md";

import { Header } from "../Components";
import { tokens } from "../../Application/data/theme";



export default function () {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            m='20px'
        >
            <Header title='FAQ' subtitle="Frequently Asked Questions Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<MdOutlineExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Nam sed feugiat magna.
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Sed dui massa, gravida commodo congue at, ultricies accumsan nunc. Aliquam sit amet urna fermentum, dictum nulla quis, semper diam. Fusce venenatis sed turpis ac feugiat
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<MdOutlineExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        In sagittis maximus urna
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Pellentesque lobortis eros vitae tristique laoreet. Vestibulum pulvinar mi nibh, eget aliquam odio rutrum in. Fusce ultrices rutrum pretium.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<MdOutlineExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Gravida purus at consectetur.
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<MdOutlineExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Suspendisse potenti.
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Donec varius dignissim tortor eu interdum. Suspendisse luctus ipsum vitae nisi lobortis, ac rutrum nibh dignissim. Aenean condimentum mauris id risus pretium consectetur.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<MdOutlineExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Etiam rutrum sollicitudin nisi
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Curabitur varius dignissim sem in finibus. Praesent vestibulum ligula id velit ullamcorper hendrerit. Donec varius dignissim tortor eu interdum
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}