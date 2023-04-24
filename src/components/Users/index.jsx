import { useData } from 'src/context/DataProvider'
import { useRouter } from 'next/router'

import Container from 'src/components/Container'
import Navbar from 'src/components/Navbar'
import Input from 'src/components/Input'
import Button from 'src/components/Button'

import styles from './styles.module.scss'

const Users = () => {
  const router = useRouter()
  const { users, removeUser } = useData()

  const deleteUserHandler = (id) => {
    removeUser(id)
  }

  const addUserHandler = () => {
    router.push('/user')
  }

  return (
    <>
      <Navbar />
      <Container>
        <h1 className={styles.title}>Users</h1>
        <ul style={{ margin: '0 0 50px 0', padding: 0 }}>
          {users &&
            users?.length !== 0 &&
            users.map((user) => (
              <div className={styles.user} key={user.id}>
                <Input type="text" value={user.name} disabled />
                <Button onClick={() => deleteUserHandler(user.id)}>X</Button>
              </div>
            ))}
        </ul>
        <Button onClick={addUserHandler}>New User</Button>
      </Container>
    </>
  )
}

export default Users
