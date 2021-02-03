import { DeleteIcon, NoteIcon, TaskIcon } from '../../../toolkit'
import React from 'react'
import { IEntity, useEntities } from '../EntitiesProvider'
import ContextMenuItem from '../../core/contextMenu/ContextMenuItem'
import { clickContextItem } from './utils'
import ContextMenu from '../../core/contextMenu/ContextMenu'

export default function InputEntityContextMenu({
  entity,
  options,
}: {
  entity: IEntity
  options: { closeContextMenu: () => void }
}) {
  const { removeItem, convert } = useEntities()
  return (
    <ContextMenu title="Convert to">
      <ContextMenuItem
        label="Note"
        icon={<NoteIcon />}
        onClick={clickContextItem(() => convert.toNote(entity.id), options)}
      />
      <ContextMenuItem
        label="Next step"
        icon={<TaskIcon />}
        onClick={clickContextItem(() => convert.toNextStep(entity.id), options)}
      />
      <ContextMenuItem
        label={'Delete'}
        pushBottom={false}
        icon={<DeleteIcon />}
        onClick={clickContextItem(() => removeItem(entity.id), options)}
        type="error"
      />
    </ContextMenu>
  )
}
