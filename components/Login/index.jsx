import styles from './styles.module.scss'

const Login = () => {
  const handleSubmit = () => {}

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
          <input placeholder="Username" className={styles.input} />
          <input placeholder="Password" className={styles.input} />
        </div>
        <button className={`${styles.button}`}>Sign In</button>
      </form>
    </div>
  )
}

export default Login
