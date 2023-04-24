import { useState } from 'react'

import Link from 'next/link'

import { useData } from 'src/context/DataProvider'

import styles from './styles.module.scss'

const Navbar = () => {
  const { logOut } = useData()
  const [checked, setChecked] = useState(false)

  const toggleChecked = () => setChecked((isChecked) => !isChecked)

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <input
          type="checkbox"
          className={styles.hamburguerInput}
          defaultChecked={checked}
          onChange={toggleChecked}
        />
        <div className={styles.hamburguer}>
          <span
            className={`${styles.hamburguerLine} ${styles.line1} ${
              checked && styles.checked
            }`}
          ></span>
          <span
            className={`${styles.hamburguerLine} ${styles.line2} ${
              checked && styles.checked
            }`}
          ></span>
          <span
            className={`${styles.hamburguerLine} ${styles.line3} ${
              checked && styles.checked
            }`}
          ></span>
        </div>
        <ul className={`${styles.menuItems} ${checked && styles.checked}`}>
          <li className={styles.menuLink} onClick={toggleChecked}>
            <Link href="/users">Users</Link>
          </li>
          <li className={styles.menuLink} onClick={toggleChecked}>
            <Link href="/dashboard">Calendar</Link>
          </li>
          <li className={styles.menuLink} onClick={logOut}>
            Log Out
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
