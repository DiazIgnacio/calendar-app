import Navbar from 'src/components/Navbar'
import Container from 'src/components/Container'
import dynamic from 'next/dynamic'

const Calendar = dynamic(() => import('src/components/Calendar'), {
  ssr: false,
})

const Dashboard = () => (
  <Container>
    <Navbar />
    <Calendar />
  </Container>
)

export default Dashboard
