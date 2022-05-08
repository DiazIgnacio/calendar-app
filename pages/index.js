import { useEffect } from 'react'

import { useData } from 'context/DataProvider'

import Dashboard from 'components/Dashboard/index'
import Login from 'components/Login/index'

export default function Home() {
  const { isLogged } = useData()
  let logged = false

  useEffect(() => {
    logged = isLogged()
  }, [])

  return logged ? <Dashboard /> : <Login />
}
