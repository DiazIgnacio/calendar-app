import { useEffect } from 'react'

import { useData } from 'context/DataProvider'

import Dashboard from 'components/Dashboard'
import Login from 'components/Login'

export default function Home() {
  const { isLogged } = useData()
  let logged = false

  useEffect(() => {
    logged = isLogged()
  }, [])

  return logged ? <Dashboard /> : <Login />
}
