import React, { useEffect, useRef, useState } from 'react'
import useOnClickOutside from '../../utils/useOnOutsideClick'
import Avatar from '../Avatar'
import cn from '../../utils/cn'
import Card from '../core/Card'
import useOnEsc from '../../utils/useOnEsc'
import ReactMarkdown from 'react-markdown'
import { CheckIcon, MenuIcon } from '../../toolkit'
import { IEntity, useEntities } from './EntitiesProvider'

function EntityCheckbox({
  checked,
  onToggle,
}: {
  checked?: boolean
  onToggle: (checked: boolean) => void
}) {
  const [isChecked, setIsChecked] = useState(checked)
  useEffect(() => setIsChecked(checked), [checked])
  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onToggle(!isChecked)
    setIsChecked((prev) => !prev)
  }
  return (
    <div
      onClick={onClick}
      className={cn({
        'cursor-pointer flex items-center justify-center rounded-full w-6 h-6 border': true,
        'bg-gray-100 hover:bg-gray-200 border-gray-300 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-600': !isChecked,
        'bg-green-300 border-green-500': isChecked,
      })}
    >
      {isChecked ? <CheckIcon className="text-green-800" /> : null}
    </div>
  )
}

function EntityBody({
  data,
  onMenuClick,
  isContextMenuOpen,
}: {
  data: IEntity
  onMenuClick: () => void
  isContextMenuOpen: boolean
}) {
  const { setChecked } = useEntities()
  return (
    <Card
      key={data.id}
      className={cn({
        'relative overflow-hidden': true,
        'border-indigo-500 dark:border-indigo-400 dark:hover:border-indigo-400 shadow-md': isContextMenuOpen,
      })}
    >
      <div className="flex">
        {data && data.output?.type === 'NEXT_STEP' ? (
          <div className="mr-4">
            <EntityCheckbox
              checked={data.output.checked}
              onToggle={(checked) => setChecked(data.id, checked)}
            />
          </div>
        ) : null}
        <div className="w-full">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-sm">
              <div className="mr-2 font-bold inline-block">
                {data.author.name}
              </div>
              <div className="mr-2 text-sm text-gray-500 inline-block">
                12 Jan, 15:45
              </div>
              {data.output ? (
                <div className="inline-block px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900 rounded-full">
                  {data.output.type}
                </div>
              ) : null}
            </div>
            <div
              onClick={onMenuClick}
              className="cursor-pointer flex items-center justify-center hover:bg-gray-900 w-8 h-8 rounded-full"
            >
              <MenuIcon />
            </div>
          </div>
          <ReactMarkdown>{data.text}</ReactMarkdown>
        </div>
      </div>
    </Card>
  )
}

export interface IContextMenuOptions {
  closeContextMenu(): void
}
export type IContextMenuRenderFn = (
  entity: IEntity,
  options: IContextMenuOptions
) => React.ReactNode

export default function Entity({
  data,
  contextMenu,
}: {
  data: IEntity
  contextMenu: IContextMenuRenderFn
}) {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)
  const ref = useRef<React.ElementRef<'div'> | null>(null)

  const closeContextMenu = () => setIsContextMenuOpen(false)

  useOnEsc(closeContextMenu)
  useOnClickOutside(ref, closeContextMenu)

  return (
    <div
      className={cn({
        '__markdown flex relative pt-4': true,
      })}
    >
      <Avatar src={data.author.avatar.src} className="mr-2" />
      <div className="w-full">
        <EntityBody
          data={data}
          isContextMenuOpen={isContextMenuOpen}
          onMenuClick={() => setIsContextMenuOpen(true)}
        />

        {isContextMenuOpen ? (
          <div
            ref={ref}
            className={cn({
              'z-10 absolute right-0 top-0 mt-2 -mr-2 shadow-xl': true,
            })}
          >
            <div className="p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded">
              {contextMenu(data, { closeContextMenu })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
