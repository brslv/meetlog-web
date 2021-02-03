import Card from '../core/Card'
import { IconButton } from '../core/Button'
import { DeleteIcon, MenuIcon } from '../../toolkit'
import ContextMenu from '../core/contextMenu/ContextMenu'
import ContextMenuItem from '../core/contextMenu/ContextMenuItem'
import React from 'react'
import useContextMenu from '../core/contextMenu/useContextMenu'
import { IBuddy } from './BuddiesList'

export default function Buddy({ data }: { data: IBuddy }) {
  const {
    isOpen: isContextMenuOpen,
    open: openContextMenu,
    close: closeContextMenu,
    ref,
  } = useContextMenu()
  return (
    <Card className="flex items-center" isFocused={isContextMenuOpen}>
      <img
        className="mr-4 w-10 h-10 rounded-full block"
        src="https://randomuser.me/api/portraits/lego/1.jpg"
        alt="Buddie 1"
      />
      <div className="w-full flex items-center justify-between">
        <div className="flex-1">{data.email}</div>
        <div className="relative">
          <IconButton icon={<MenuIcon />} onClick={openContextMenu} />
          {isContextMenuOpen ? (
            <div
              ref={ref}
              className="absolute top-0 left-1/2"
              style={{ top: 40, transform: `translateX(-50%)` }}
            >
              <ContextMenu title="Actions">
                <ContextMenuItem
                  label={'Remove'}
                  type="error"
                  icon={<DeleteIcon />}
                  onClick={closeContextMenu}
                />
              </ContextMenu>
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  )
}
