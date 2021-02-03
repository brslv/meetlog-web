import React from 'react'
import Card from './core/Card'
import { DeleteIcon, MenuIcon } from '../toolkit'
import { IconButton } from './core/Button'
import ContextMenuItem from './core/contextMenu/ContextMenuItem'
import ContextMenu from './core/contextMenu/ContextMenu'
import useContextMenu from './core/contextMenu/useContextMenu'

export default function BuddiesList() {
  const {
    isOpen: isContextMenuOpen,
    open: openContextMenu,
    close: closeContextMenu,
    ref,
  } = useContextMenu()

  return (
    <div>
      <Card className="flex items-center" isFocused={isContextMenuOpen}>
        <img
          className="mr-4 w-10 h-10 rounded-full block"
          src="https://randomuser.me/api/portraits/lego/1.jpg"
          alt="Buddie 1"
        />
        <div className="w-full flex items-center justify-between">
          <div className="flex-1">borislav@email.com</div>
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
    </div>
  )
}
