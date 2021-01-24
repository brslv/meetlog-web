import React from 'react'
import { ReactComponent as Logo } from '../assets/images/logo.svg'

export default function SideNav() {
  return (
    <div className="fixed top-0 left-0 w-20 h-screen bg-white flex flex-col items-center py-4 border-r border-gray-300">
      <Logo className="cursor-pointer" />
    </div>
  )
}
