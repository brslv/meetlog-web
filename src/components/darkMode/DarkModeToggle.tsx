import { SunIcon } from '../../toolkit'
import React from 'react'
import { useDarkMode } from './DarkModeProvider'

export default function DarkModeToggle() {
  const { setIsDarkMode } = useDarkMode()

  const onClick = () => setIsDarkMode((prev) => !prev)

  return (
    <SunIcon
      className="hover:text-indigo-600 dark:hover:text-indigo-300 cursor-pointer w-7 h-7"
      onClick={onClick}
    />
  )
}
