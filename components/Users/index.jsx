import { useData } from 'context/DataProvider'

import Container from 'components/Container'
import Navbar from 'components/Navbar'

import styles from './styles.module.scss'

const Users = () => {
  const { users } = useData()
  return (
    <>
      <Navbar />
      <Container>
        <h1 className={styles.title}>Users</h1>
        <ul>
          {users && users.map((user, index) => <li key={index}>{user}</li>)}
        </ul>
      </Container>
    </>
  )
}

export default Users
