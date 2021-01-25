import React, { createContext, useContext, useEffect, useState } from 'react'

interface Ctx {
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const Context = createContext<Ctx | null>(null)

const localStorageKey = 'darkMode'
const darkModeClass = 'dark'
const body = document.body

export default function DarkModeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem(localStorageKey) === 'true'
  )

  useEffect(() => {
    if (isDarkMode) {
      body.classList.add(darkModeClass)
      localStorage.setItem(localStorageKey, 'true')
    } else {
      body.classList.remove(darkModeClass)
      localStorage.setItem(localStorageKey, 'false')
    }
  }, [isDarkMode])

  useEffect(() => {
    const lsValue = localStorage.getItem(localStorageKey)
    setIsDarkMode(lsValue === 'true')
  }, [])

  const value = { isDarkMode, setIsDarkMode }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useDarkMode = () => {
  const c = useContext(Context)
  if (c === null) throw Error('Improper use of DarkModeProvider')
  return c
}
