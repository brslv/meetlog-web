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
import { Link } from 'react-router-dom'
import DarkModeToggle from './darkMode/DarkModeToggle'
import Avatar from './Avatar'

export function SideNavPusher({ children }: { children: React.ReactNode }) {
  return <div className="ml-20">{children}</div>
}

function SideNavItem({
  children,
  hint,
  onClick,
  pushY = true,
  hintLeftSpacing = 10,
}: {
  children: React.ReactNode
  hint: string
  onClick?: () => void
  pushY?: boolean
  hintLeftSpacing?: number
}) {
  const [isHintHidden, setIsHintHidden] = useState<boolean>(true)
  const onMouseEnter = () => setIsHintHidden(false)
  const onMouseLeave = () => setIsHintHidden(true)

  return (
    <div className={cn({ relative: true, 'my-4': pushY })}>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {children}
      </div>
      <div
        className={cn({
          [`absolute ml-${hintLeftSpacing}`]: true,
          hidden: isHintHidden,
        })}
        style={{
          top: '50%',
          transform: `translateY(-50%)`,
        }}
      >
        <div
          className="bg-white dark:bg-gray-800 rounded p-2 border border-gray-300 dark:border-gray-700 whitespace-nowrap"
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
    <div className="z-10 fixed top-0 left-0 w-20 h-screen bg-white dark:bg-gray-800 flex flex-col items-center justify-between py-4 border-r border-gray-300 dark:border-gray-700">
      <div className="flex flex-col items-center">
        <Link to="/">
          <Logo className="cursor-pointer mb-8" />
        </Link>
        <SideNavItem
          hint="Create meeting"
          onClick={() => setIsCreatingMeeting(true)}
        >
          <AddIcon className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer w-7 h-7" />
        </SideNavItem>
        <Link to="/d">
          <SideNavItem hint="Dashboard">
            <HomeIcon className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer w-7 h-7" />
          </SideNavItem>
        </Link>
        <Link to="/">
          <SideNavItem hint="Settings">
            <SettingsIcon className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer w-7 h-7" />
          </SideNavItem>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <SideNavItem hint="Toggle dark mode">
          <DarkModeToggle />
        </SideNavItem>
        <SideNavItem hint="Profile settings" hintLeftSpacing={14} pushY={false}>
          <Avatar src="https://randomuser.me/api/portraits/lego/0.jpg" />
        </SideNavItem>
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
