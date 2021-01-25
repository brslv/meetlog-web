import React from 'react'
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import {
  RiHomeSmile2Line as HomeIcon,
  RiAddBoxLine as AddIcon,
  RiSettingsLine as SettingsIcon,
} from 'react-icons/ri'

export function SideNavPusher({ children }: { children: React.ReactNode }) {
  return <div className="ml-20">{children}</div>
}

export default function SideNav() {
  return (
    <div className="fixed top-0 left-0 w-20 h-screen bg-white flex flex-col items-center justify-between py-4 border-r border-gray-300">
      <div className="flex flex-col items-center">
        <Logo className="cursor-pointer mb-8" />
        <div className="my-4">
          <AddIcon className="text-gray-800 hover:text-indigo-600 cursor-pointer w-7 h-7" />
        </div>
        <div className="my-4">
          <HomeIcon className="text-gray-800 hover:text-indigo-600 cursor-pointer w-7 h-7" />
        </div>
        <div className="my-4">
          <SettingsIcon className="text-gray-800 hover:text-indigo-600 cursor-pointer w-7 h-7" />
        </div>
      </div>
      <div>
        <img
          src="https://randomuser.me/api/portraits/lego/2.jpg"
          className="w-12 h-12 rounded-full border border-gray-300 hover:border-indigo-500 cursor-pointer"
        />
      </div>
    </div>
  )
}
