import React from 'react'
import cn from '../../utils/cn'

export enum ContextMenuItemType {
  Default = 'Default',
  Error = 'Error',
}

export default function ContextMenuItem({
  label,
  type = ContextMenuItemType.Default,
  icon,
  onClick,
}: {
  label: React.ReactNode
  type?: ContextMenuItemType
  icon: React.ReactNode
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={cn({
        'mb-2 px-4 py-2 cursor-pointer rounded w-52': true,
        'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600':
          type === ContextMenuItemType.Default,
        'bg-red-100 hover:bg-red-200 dark:bg-red-500 dark:hover:bg-red-600':
          type === ContextMenuItemType.Error,
      })}
    >
      <div className="flex justify-between items-center">
        <span>{label}</span>
        <div>{icon}</div>
      </div>
    </div>
  )
}
