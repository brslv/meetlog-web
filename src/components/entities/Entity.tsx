import React, { useEffect, useRef, useState } from 'react'
import useOnClickOutside from '../../utils/useOnOutsideClick'
import Avatar from '../Avatar'
import cn from '../../utils/cn'
import Card from '../core/Card'
import useOnEsc from '../../utils/useOnEsc'
import ReactMarkdown from 'react-markdown'
import { Check } from '../../toolkit'
import { IEntity, useEntities } from './EntitiesProvider'

function EntityCheckbox({
  checked,
  onToggle,
}: {
  checked?: boolean
  onToggle: (isChecked: boolean) => void
}) {
  const [isChecked, setIsChecked] = useState(checked)
  useEffect(() => setIsChecked(checked), [checked])
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onToggle(!isChecked)
    setIsChecked((prev) => !prev)
  }
  return (
    <div
      onClick={onClick}
      className={cn({
        'flex items-center justify-center rounded-full w-6 h-6 hover:bg-green-100 border hover:border-green-500': true,
        'bg-gray-100 border-gray-300': !isChecked,
        'bg-green-300 border-green-500': isChecked,
      })}
    >
      {isChecked ? <Check className="text-green-800" /> : null}
    </div>
  )
}

function EntityBody({
  data,
  isContextMenuOpen,
}: {
  data: IEntity
  isContextMenuOpen: boolean
}) {
  const { toggleNextStep } = useEntities()
  return (
    <Card
      key={data.id}
      className={cn({
        'cursor-pointer relative overflow-hidden': true,
        'border-indigo-500 dark:border-indigo-400 dark:hover:border-indigo-400 shadow-md': isContextMenuOpen,
      })}
    >
      <div className="flex">
        {data.output?.type === 'NEXT_STEP' ? (
          <div className="mr-4">
            <EntityCheckbox
              checked={data.output.checked}
              onToggle={() => toggleNextStep(data.id)}
            />
          </div>
        ) : null}
        <div>
          <div className="text-sm mb-2">
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
          <ReactMarkdown>{data.text}</ReactMarkdown>
        </div>
      </div>
    </Card>
  )
}

export default function Entity({
  data,
  isLast,
  contextMenu,
}: {
  data: IEntity
  isLast: boolean
  contextMenu: (
    entity: IEntity,
    options: { closeContextMenu: () => void }
  ) => React.ReactNode
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
      <div className="w-full" onClick={() => setIsContextMenuOpen(true)}>
        <EntityBody data={data} isContextMenuOpen={isContextMenuOpen} />

        {isContextMenuOpen ? (
          <div
            ref={ref}
            className={cn({
              'z-10 absolute right-0 mt-2 -mr-2 shadow-xl': true,
              'top-0': !isLast,
              'bottom-0 -mb-2': isLast,
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
