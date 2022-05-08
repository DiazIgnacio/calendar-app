import styles from './styles.module.scss'

const Title = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>
}

export default Title
