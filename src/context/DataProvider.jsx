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
      usersFromStorage.push({ name: logged, id: Math.random() })
      setUsers(usersFromStorage)
      return logged
    },
    logOut: () => {
      setData(null)
      localStorage.removeItem('logged')
      window.location.href = '/login'
      return true
    },
    addUser: (name) => {
      const usersFromStorage = JSON.parse(localStorage.getItem('users')) || []
      usersFromStorage.push({ name, id: Math.random() })
      setUsers(usersFromStorage)
      return usersFromStorage
    },
    removeUser: (id) => {
      const usersFromStorage = JSON.parse(localStorage.getItem('users'))
      const filteredUsers = usersFromStorage.filter((user) => user.id !== id)
      setUsers([...filteredUsers])
      return filteredUsers
    },
  }))

  useEffect(() => {
    const logged = JSON.parse(localStorage.getItem('logged'))
    setData(logged)
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
