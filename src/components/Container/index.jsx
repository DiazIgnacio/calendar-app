import styles from './styles.module.scss'

const Container = ({ children, className }) => (
  <div className={`${styles.container} ${className ?? ''}`}>{children}</div>
)

export default Container
