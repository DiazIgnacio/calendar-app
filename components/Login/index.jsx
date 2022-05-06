import styles from './styles.module.scss'

const Login = () => {
  return (
    <form className={`${styles.card}`}>
      <div style={{ marginTop: '-80px', marginBottom: '30px' }}>
        <h1 style={{ marginBottom: '0' }}>Welcome!</h1>
        <p>Enter your credentials to access your account</p>
      </div>
      <input placeholder="Username" style={{ margin: '10px 0px 10px 0px' }} />
      <input placeholder="Password" style={{ margin: '10px 0px 30px 0px' }} />
      <button>Login</button>
    </form>
  )
}

export default Login
