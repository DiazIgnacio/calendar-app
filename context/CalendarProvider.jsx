import { createContext, useContext, useState, useMemo, useEffect } from 'react'

export const CalendarContext = createContext('')

export const CalendarProvider = ({ children }) => {
  const [calendarData, setCalendarData] = useState()

  const calendarContext = useMemo(() => ({
    getEvents: () => JSON.parse(localStorage.getItem('events')),
    newEvent: (event) => {
      const events = JSON.parse(localStorage.getItem('events')) || []
      events.push(event)
      setCalendarData(events)
      return events
    },
    updateEvent: (event, id) => {
      const events = JSON.parse(localStorage.getItem('events'))
      const eventToUpdate = events.filter((e) => e.id === id)[0]
      Object.assign(eventToUpdate, event)
      const filteredEvents = events.filter((e) => e.id !== id)
      setCalendarData([...filteredEvents, eventToUpdate])
    },
    deleteEvent: (id) => {
      const events = JSON.parse(localStorage.getItem('events'))
      const filteredEvents = events.filter((e) => e.id !== id)
      setCalendarData([...filteredEvents])
      return filteredEvents
    },
  }))

  useEffect(() => {
    const events = calendarContext.getEvents()
    events && setCalendarData(events)
  }, [])

  useEffect(() => {
    calendarData && localStorage.setItem('events', JSON.stringify(calendarData))
  }, [calendarData])

  return (
    <CalendarContext.Provider
      value={{
        calendarData,
        setCalendarData,
        ...calendarContext,
      }}
    >
      {children}
    </CalendarContext.Provider>
  )
}

export const useCalendar = () => useContext(CalendarContext)
