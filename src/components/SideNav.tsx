import React, { useState } from 'react'
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import {
  RiHomeSmile2Line as HomeIcon,
  RiAddBoxLine as AddIcon,
  RiSettingsLine as SettingsIcon,
} from 'react-icons/ri'
import cn from '../utils/cn'
import Modal from './core/Modal'
import Title from './core/Title'
import MeetingForm from './MeetingForm'

export function SideNavPusher({ children }: { children: React.ReactNode }) {
  return <div className="ml-20">{children}</div>
}

function SideNavItem({
  children,
  hint,
  onClick,
}: {
  children: React.ReactNode
  hint: string
  onClick?: () => void
}) {
  const [isHintHidden, setIsHintHidden] = useState<boolean>(true)
  const onMouseEnter = () => setIsHintHidden(false)
  const onMouseLeave = () => setIsHintHidden(true)

  return (
    <div className="relative my-4">
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {children}
      </div>
      <div
        className={cn({ 'absolute ml-10': true, hidden: isHintHidden })}
        style={{
          top: '50%',
          transform: `translateY(-50%)`,
        }}
      >
        <div
          className="bg-white rounded p-2 border border-gray-300 whitespace-nowrap"
          style={{ width: 'auto' }}
        >
          {hint}
        </div>
      </div>
    </div>
  )
}

export default function SideNav() {
  const [isCreatingMeeting, setIsCreatingMeeting] = useState(false)

  return (
    <div className="fixed top-0 left-0 w-20 h-screen bg-white flex flex-col items-center justify-between py-4 border-r border-gray-300">
      <div className="flex flex-col items-center">
        <Logo className="cursor-pointer mb-8" />
        <SideNavItem
          hint="Create meeting"
          onClick={() => setIsCreatingMeeting(true)}
        >
          <AddIcon className="text-gray-800 hover:text-indigo-600 cursor-pointer w-7 h-7" />
        </SideNavItem>
        <SideNavItem hint="Dashboard">
          <HomeIcon className="text-gray-800 hover:text-indigo-600 cursor-pointer w-7 h-7" />
        </SideNavItem>
        <SideNavItem hint="Settings">
          <SettingsIcon className="text-gray-800 hover:text-indigo-600 cursor-pointer w-7 h-7" />
        </SideNavItem>
      </div>
      <div>
        <img
          alt="User avatar"
          src="https://randomuser.me/api/portraits/lego/2.jpg"
          className="w-12 h-12 rounded-full border border-gray-300 hover:border-indigo-500 cursor-pointer"
        />
      </div>

      <Modal
        onClose={() => setIsCreatingMeeting(false)}
        open={isCreatingMeeting}
        style={{ minWidth: 320 }}
      >
        <Title>New meeting</Title>
        <MeetingForm onSubmit={(data) => console.log({ data })} />
      </Modal>
    </div>
  )
}
