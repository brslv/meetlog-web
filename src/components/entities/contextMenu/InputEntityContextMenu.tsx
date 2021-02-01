import Title from '../../core/Title'
import { DeleteIcon, NoteIcon, TaskIcon } from '../../../toolkit'
import React from 'react'
import { IEntity, useEntities } from '../EntitiesProvider'
import ContextMenuItem, {
  ContextMenuItemType,
} from '../../core/ContextMenuItem'
import { clickContextItem } from './utils'

export default function InputEntityContextMenu({
  entity,
  options,
}: {
  entity: IEntity
  options: { closeContextMenu: () => void }
}) {
  const { removeItem, convert } = useEntities()
  return (
    <div>
      <Title>Convert to</Title>

      <ContextMenuItem
        label={'Note'}
        icon={<NoteIcon />}
        onClick={clickContextItem(() => convert.toNote(entity.id), options)}
      />
      <ContextMenuItem
        label={'Next step'}
        icon={<TaskIcon />}
        onClick={clickContextItem(() => convert.toNextStep(entity.id), options)}
      />
      <ContextMenuItem
        label={'Delete'}
        pushBottom={false}
        icon={<DeleteIcon />}
        onClick={clickContextItem(() => removeItem(entity.id), options)}
        type={ContextMenuItemType.Error}
      />
    </div>
  )
}
