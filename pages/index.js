import { useEffect } from 'react'

import { useData } from 'src/context/DataProvider'

import Dashboard from 'src/components/Dashboard'
import Login from 'src/components/Login'

export default function Home() {
  const { isLogged } = useData()
  let logged = false

  useEffect(() => {
    logged = isLogged()
  }, [])

  return logged ? <Dashboard /> : <Login />
}
