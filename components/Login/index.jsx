import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useData } from 'context/DataProvider'
import Input from 'components/Input'
import Button from 'components/Button'

import styles from './styles.module.scss'

const Login = () => {
  const router = useRouter()
  const [data, setData] = useState({})
  const { isLogged, logIn } = useData()

  useEffect(() => {
    if (isLogged()) router.push('/dashboard')
  }, [])

  const handleInputChange = (event) =>
    setData((data) => ({ ...data, [event.target.name]: event.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()

    logIn(data.username)
    router.push('/dashboard')
  }

  return (
    <div className={styles.container}>
      <form className={`${styles.card}`} onSubmit={handleSubmit}>
        <header className={`${styles.headerText}`}>
          <h1 className={`${styles.title}`}>Welcome back</h1>
          <p className={`${styles.subtitle}`}>
            Enter your credentials to access your account
          </p>
        </header>
        <div>
          <Input
            placeholder="Username"
            name="username"
            onChange={handleInputChange}
          />
          <Input
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleInputChange}
          />
        </div>
        <Button>Sign In</Button>
      </form>
    </div>
  )
}

export default Login
