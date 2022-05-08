import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useCalendar } from 'context/CalendarProvider'
import { useData } from 'context/DataProvider'

import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'

import styles from './styles.module.scss'

export default function Calendar(props) {
  const { calendarData: events, newEvent } = useCalendar()
  const { isLogged } = useData()
  const router = useRouter()

  useEffect(() => {
    if (!isLogged()) router.push('/login')
  }, [])

  const addEventHandler = (event) => {
    const { dayEl, ...e } = event
    newEvent({ title: 'Tarea', ...e })
  }

  const headerToolbar = {
    start: 'title',
    center: '',
    end: 'timeGridDay,timeGridWeek,dayGridMonth',
  }

  return (
    <FullCalendar
      plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
      initialView="dayGridMonth"
      editable
      selectable
      select={addEventHandler}
      events={events}
      headerToolbar={headerToolbar}
      dateClick={addEventHandler}
    />
  )
}
