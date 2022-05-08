import { useId, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { useCalendar } from 'context/CalendarProvider'

import Input from 'components/Input'
import Button from 'components/Button'
import Container from 'components/Container'

import styles from './styles.module.scss'

const CalendarEvent = ({ props }) => {
  const router = useRouter()
  const json = router.query.event ? JSON.parse(router.query.event) : null
  const id = json?.id || useId()
  const { newEvent, updateEvent, deleteEvent } = useCalendar()
  const [event, setEvent] = useState()

  useEffect(() => {
    setEvent(json)
  }, [])

  const handleInputChange = (e) =>
    setEvent((event) => ({ ...event, [e.target.name]: e.target.value }))

  const onSubmitHandler = (e) => {
    e.preventDefault()

    json?.id ? updateEvent(event, id) : newEvent({ ...event, id })
    router.push('/dashboard')
  }

  const onDeleteEventHandler = () => {
    deleteEvent(json?.id)
    router.push('/dashboard')
  }

  const showDate = (v) => {
    if (event?.extendedProps) {
      return event.extendedProps[v] ?? ''
    } else if (event) {
      return event[v] ?? ''
    }
    return ''
  }

  return (
    <Container>
      <form onSubmit={onSubmitHandler}>
        <h1 className={styles.title}>Event</h1>
        {event?.date || event?.extendedProps?.dateStr ? (
          <Input
            placeholder="Date"
            name="date"
            value={
              event?.date
                ? event?.date.split('T')[0]
                : event?.extendedProps?.dateStr
            }
            disabled
          />
        ) : (
          <>
            <Input
              placeholder="Start"
              name="start"
              value={showDate('startStr')}
              disabled
            />
            <Input
              placeholder="End"
              name="end"
              value={showDate('endStr')}
              disabled
            />
          </>
        )}

        <Input
          placeholder="Title"
          name="title"
          value={event?.title ?? ''}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          className={styles.textarea}
          rows="10"
          placeholder="Description..."
          onChange={(e) =>
            setEvent((event) => ({
              ...event,
              extendedProps: {
                ...event?.extendedProps,
                description: e.target.value,
              },
            }))
          }
          value={event?.extendedProps?.description ?? ''}
        ></textarea>
        <Button type="submit">Save</Button>
        {json?.id && (
          <Button type="button" onClick={onDeleteEventHandler}>
            Delete
          </Button>
        )}
        <Button
          type="button"
          onClick={() => router.push('/dashboard')}
          outlined
        >
          Cancel
        </Button>
      </form>
    </Container>
  )
}

export default CalendarEvent
