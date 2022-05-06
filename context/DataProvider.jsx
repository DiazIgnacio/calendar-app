import { createContext, useEffect, useState, useMemo } from 'react'

export const DataContext = createContext('')

export const DataProvider = ({ children }) => {
  const [data, setData] = useState()

  const dataContext = useMemo(() => ({
    isLogged: () => localStorage.getItem('logged'),
    isStateLogged: () => !!data,
    logIn: (logged) => {
      setData(logged)
      localStorage.setItem('logged', JSON.stringify(logged))
      return logged
    },
    logOut: () => {
      setData(null)
      localStorage.removeItem('logged')
      window.location.href = '/login'
      return true
    },
  }))

  useEffect(() => {
    const logged = JSON.parse(localStorage.getItem('logged'))
    setData(logged)
  }, [])

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        ...dataContext,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
