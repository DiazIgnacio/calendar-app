import { createContext, useContext, useEffect, useState, useMemo } from 'react'

export const DataContext = createContext('')

export const DataProvider = ({ children }) => {
  const [data, setData] = useState()
  const [users, setUsers] = useState()

  const dataContext = useMemo(() => ({
    isLogged: () => localStorage.getItem('logged'),
    isStateLogged: () => !!data,
    logIn: (logged) => {
      setData(logged)
      localStorage.setItem('logged', JSON.stringify(logged))

      const usersFromStorage = JSON.parse(localStorage.getItem('users')) || []
      usersFromStorage.push(logged)
      setUsers(usersFromStorage)
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

    const usersFromStorage = JSON.parse(localStorage.getItem('users'))
    usersFromStorage && setUsers(usersFromStorage)
  }, [])

  useEffect(() => {
    users && localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  return (
    <DataContext.Provider
      value={{
        data,
        users,
        setData,
        ...dataContext,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => useContext(DataContext)
