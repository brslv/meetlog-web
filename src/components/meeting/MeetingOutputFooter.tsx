import React from 'react'
import { SECTION_FOOTER_MIN_HEIGHT } from '../../constants'

function FooterButton({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex items-center justify-center cursor-pointer border-t-4 border-gray-300 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 px-4"
      style={{ height: '100%' }}
    >
      {children}
    </div>
  )
}

export default function MeetingOutputFooter() {
  return (
    <div
      className="flex items-center relative bg-white dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700"
      style={{ height: SECTION_FOOTER_MIN_HEIGHT }}
    >
      <FooterButton>Notes</FooterButton>
      <FooterButton>Next steps</FooterButton>
    </div>
  )
}
