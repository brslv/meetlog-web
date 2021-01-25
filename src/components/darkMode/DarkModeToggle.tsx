import { SunIcon } from '../../toolkit'
import React from 'react'
import { useDarkMode } from './DarkModeProvider'

export default function DarkModeToggle() {
  const { setIsDarkMode } = useDarkMode()

  const onClick = () => setIsDarkMode((prev) => !prev)

  return (
    <SunIcon
      className="text-gray-800 hover:text-indigo-600 cursor-pointer w-7 h-7"
      onClick={onClick}
    />
  )
}
