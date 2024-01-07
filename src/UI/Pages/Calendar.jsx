import React, { useContext, useState } from "react";
import { formatDate } from "Full_Calendar/core";
import { default as FullCalendar } from "Full_Calendar/react";
import { default as dayGridPlugin } from "Full_Calendar/daygrid";
import { default as timeGridPlugin } from "Full_Calendar/timegrid";
import { default as interactionPlugin } from "Full_Calendar/interaction";
import { default as listPlugin } from "Full_Calendar/list";
import {
    Box,
    List,
    ListItem,
    ListItemText, Typography, useTheme
} from "MUI_Material";

import { Header } from "../Components";
import { tokens } from "../../Application/data/theme";
import { MainContext } from "../../Infrastructure/MainContextProvider";



export default function () {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { mainValues, setMainValues } = useContext(MainContext)
    const { sidebar } = mainValues
    console.log(sidebar)

    const [currentEvents, setCurrentEvents] = useState([])

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event")
        const calendarApi = selected.view.calendar
        calendarApi.unselect()

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }
    }

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
            selected.event.remove()
        }
    }

    const handleResize = (info) => {

    }

    return (
        <Box
            mt='20px'
            ml="20px"
        >
            <Header title='CALENDAR' subtitle="Full Calendar Interactive Page" />
            <Box display='flex' justifyContent='space-between'>
                <Box
                    id='calendar-container-header'
                    flex="1 1 20%"
                    backgroundColor={colors.primary[400]}
                    p="15px"
                    borderRadius="4px"

                >
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    margin: "10px 0",
                                    borderRadius: "2px",
                                }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric"
                                            })}
                                        </Typography>
                                    }
                                >
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box flex='1 1 100%'
                    m='0 1rem'
                    id='calendar-container-body'
                    sx={{
                        '& .fc-list-day-cushion': {
                            backgroundColor: `${colors.blueAccent[700]} !important`,
                        },
                        '& .fc-list-event': {
                            backgroundColor: `#1F2A40 !important`,
                        }
                    }}>
                    <FullCalendar
                        height={76.5 * sidebar.height / 100}
                        plugins={[
                            dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin
                        ]}
                        headerToolbar={{
                            left: 'prev, next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                        }}
                        initialValue='listMonth'
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        windowResize={handleResize}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            { id: "1234", title: "All-day event", date: "2024-02-15" },
                            { id: "4321", title: "Timed event", date: "2024-01-28" }
                        ]}
                    >

                    </FullCalendar>
                </Box>
            </Box>
        </Box>
    )
}
