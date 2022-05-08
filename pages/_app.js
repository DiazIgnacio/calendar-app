import 'normalize.css'
import '../styles/globals.css'
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import { DataProvider } from 'context/DataProvider'
import { CalendarProvider } from 'context/CalendarProvider'

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
