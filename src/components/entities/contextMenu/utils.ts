import React from 'react'

export const clickContextItem = (
  fn: () => void,
  options: { closeContextMenu: () => void }
) => (e: React.MouseEvent) => {
  e.stopPropagation()
  fn()
  options.closeContextMenu()
}
