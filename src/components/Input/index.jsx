import styles from './styles.module.scss'

const Input = ({ className, ...props }) => (
  <input className={`${styles.input} ${className ?? ''}`} {...props} />
)

export default Input
