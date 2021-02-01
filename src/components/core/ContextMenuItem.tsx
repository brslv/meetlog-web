import React from 'react'
import cn from '../../utils/cn'

export enum ContextMenuItemType {
  Default = 'Default',
  Error = 'Error',
}

export default function ContextMenuItem({
  label,
  pushBottom = true,
  type = ContextMenuItemType.Default,
  icon,
  onClick,
}: {
  label: React.ReactNode
  pushBottom?: boolean
  type?: ContextMenuItemType
  icon: React.ReactNode
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={cn({
        'px-4 py-2 cursor-pointer rounded w-52': true,
        'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600':
          type === ContextMenuItemType.Default,
        'bg-red-100 hover:bg-red-200 dark:bg-red-500 dark:hover:bg-red-600':
          type === ContextMenuItemType.Error,
        'mb-2': pushBottom,
      })}
    >
      <div className="flex justify-between items-center">
        <span>{label}</span>
        <div>{icon}</div>
      </div>
    </div>
  )
}
