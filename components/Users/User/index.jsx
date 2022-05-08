import { useState } from 'react'

import { useRouter } from 'next/router'

import { useData } from 'context/DataProvider'

import Button from 'components/Button/index'
import Container from 'components/Container/index'
import Input from 'components/Input/index'
import Navbar from 'components/Navbar/index'
import Title from 'components/Title/index'

const User = () => {
  const router = useRouter()
  const [userName, setUserName] = useState('')
  const { addUser } = useData()

  const handleInputChange = (e) => setUserName(e.target.value)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    addUser(userName)
    router.push('/users')
  }
  const onCancelHandler = () => {
    setUserName('')
    router.push('/users')
  }

  return (
    <>
      <Navbar />
      <Container>
        <Title>New User</Title>
        <form onSubmit={onSubmitHandler}>
          <Input
            type="text"
            placeholder="Name"
            value={userName}
            onChange={handleInputChange}
          />
          <Button type="submit">Add User</Button>
          <Button type="button" onClick={onCancelHandler} outlined>
            Cancel
          </Button>
        </form>
      </Container>
    </>
  )
}

export default User
