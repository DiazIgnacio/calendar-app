import dynamic from 'next/dynamic'

import Navbar from 'components/Navbar'
import Container from 'components/Container'

const Calendar = dynamic(() => import('components/Calendar'), {
  ssr: false,
})

const Dashboard = () => (
  <Container>
    <Navbar />
    <Calendar />
  </Container>
)

export default Dashboard
