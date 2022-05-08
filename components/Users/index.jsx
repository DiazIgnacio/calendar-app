import { useData } from 'context/DataProvider'

import Container from 'components/Container'
import Navbar from 'components/Navbar'

import styles from './styles.module.scss'

const Users = () => {
  const { users } = useData()
  console.log(users)
  return (
    <>
      <Navbar />
      <Container>
        <h1 className={styles.title}>Users</h1>
      </Container>
    </>
  )
}

export default Users
