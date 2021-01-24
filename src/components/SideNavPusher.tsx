import React from 'react'

export default function SideNavPusher({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="ml-20">{children}</div>
}
