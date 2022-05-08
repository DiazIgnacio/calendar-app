import Calendar from 'components/Calendar'
import Navbar from 'components/Navbar'
import Container from 'components/Container'
import styles from './styles.module.scss'

const Dashboard = () => {
  return (
    <Container>
      <Navbar />
      <Calendar />
    </Container>
  )
}

export default Dashboard
