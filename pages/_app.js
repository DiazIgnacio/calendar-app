import { DataProvider } from 'context/DataProvider'
import { CalendarProvider } from 'context/CalendarProvider'

import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'

import 'normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <CalendarProvider>
        <Component {...pageProps} />
      </CalendarProvider>
    </DataProvider>
  )
}

export default MyApp
