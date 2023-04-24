import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useCalendar } from 'context/CalendarProvider'
import { useData } from 'context/DataProvider'

import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'

const Calendar = () => {
  const { calendarData: events } = useCalendar()
  const { isLogged } = useData()
  const router = useRouter()

  useEffect(() => {
    !isLogged() && router.push('/login')
  }, [])

  const addEventHandler = (event) => {
    const { dayEl, el, view, jsEvent, ...e } = event

    router.push({
      pathname: '/event',
      query: { event: JSON.stringify(e) },
    })
  }

  const editEventHandler = (event) => {
    router.push({
      pathname: '/event',
      query: { event: JSON.stringify(event.event) },
    })
  }

  return (
    <FullCalendar
      plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
      initialView="dayGridMonth"
      editable
      selectable
      events={events}
      headerToolbar={headerToolbar}
      select={addEventHandler}
      dateClick={addEventHandler}
      eventClick={editEventHandler}
    />
  )
}

const headerToolbar = {
  start: 'title',
  center: '',
  end: 'timeGridDay,timeGridWeek,dayGridMonth',
}

export default Calendar
