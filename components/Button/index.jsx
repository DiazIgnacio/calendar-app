import styles from './styles.module.scss'

const Button = ({ children, outlined, ...props }) => {
  console.log(outlined)
  return (
    <button
      className={`${styles.button} ${outlined && styles.outlined}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
