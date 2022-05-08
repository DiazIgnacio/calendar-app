import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useData } from 'context/DataProvider'

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
          <input
            placeholder="Username"
            className={styles.input}
            name="username"
            onChange={handleInputChange}
          />
          <input
            placeholder="Password"
            className={styles.input}
            name="password"
            onChange={handleInputChange}
            type="password"
          />
        </div>
        <button className={`${styles.button}`}>Sign In</button>
      </form>
    </div>
  )
}

export default Login
