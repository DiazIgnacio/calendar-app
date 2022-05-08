import styles from './styles.module.scss'

const Button = ({ children, outlined, className, ...props }) => {
  return (
    <button
      className={`${styles.button} ${outlined && styles.outlined} ${
        className ?? ''
      }`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
