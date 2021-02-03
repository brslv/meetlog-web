import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Avatar from '../Avatar'
import cn from '../../utils/cn'
import Card from '../core/Card'
import ReactMarkdown from 'react-markdown'
import { CheckIcon, MenuIcon } from '../../toolkit'
import {
  IEntity,
  useEntities,
  entityOutputTypeToHumanReadable,
} from './EntitiesProvider'
import { IconButton } from '../core/Button'
import useContextMenu from '../core/contextMenu/useContextMenu'

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

interface IMenuPos {
  top?: number
  left?: number
  right?: number
  bottom?: number
}
function EntityBody({
  data,
  contextMenu,
}: {
  data: IEntity
  contextMenu: IContextMenuRenderFn
}) {
  const { setChecked } = useEntities()
  const {
    isOpen: isContextMenuOpen,
    open: openContextMenu,
    close: closeContextMenu,
    ref: contextMenuRef,
  } = useContextMenu()
  const menuIconRef = useRef<React.ElementRef<'div'> | null>(null)
  const [menuPos, setMenuPos] = useState<IMenuPos>({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  })

  useLayoutEffect(() => {
    if (!menuIconRef.current || !contextMenuRef.current) return

    /**
     * Here we do some calculations to determine the "fixed" position
     * of the context menu. We make sure that it's not bleeding
     * on the bottom and the right side of the screen.
     */

    const menuRect = contextMenuRef.current?.getBoundingClientRect()
    const iconRect = menuIconRef.current?.getBoundingClientRect()
    const inBottom =
      menuRect.height + iconRect.top <=
      (window.innerHeight || document.documentElement.clientHeight)
    const inRight =
      menuRect.width + iconRect.right <=
      (window.innerWidth || document.documentElement.clientWidth)

    setMenuPos({
      top: !inBottom ? undefined : iconRect.top + 40,
      left: !inRight ? undefined : iconRect.left - 100,
      bottom: !inBottom ? iconRect.bottom - iconRect.top : undefined,
      right: !inRight ? 10 : undefined,
    })
  }, [isContextMenuOpen, contextMenuRef])

  return (
    <Card
      key={data.id}
      className="relative overflow-hidden"
      isFocused={isContextMenuOpen}
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
                  {entityOutputTypeToHumanReadable(data.output.type)}
                </div>
              ) : null}
            </div>
            <div className="relative">
              <IconButton
                ref={menuIconRef}
                icon={<MenuIcon />}
                onClick={openContextMenu}
              />

              <div
                ref={contextMenuRef}
                style={{ ...menuPos }}
                className={cn({
                  'z-10 fixed fixed shadow-xl': true,
                  hidden: !isContextMenuOpen,
                })}
              >
                {contextMenu(data, { closeContextMenu })}
              </div>
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
  return (
    <div
      className={cn({
        '__markdown flex relative pt-4': true,
      })}
    >
      <Avatar src={data.author.avatar.src} className="mr-2" />
      <div className="w-full">
        <EntityBody data={data} contextMenu={contextMenu} />
      </div>
    </div>
  )
}
