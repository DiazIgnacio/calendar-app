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
