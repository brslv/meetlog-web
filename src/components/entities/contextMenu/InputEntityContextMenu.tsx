import Title from '../../core/Title'
import { DeleteIcon, NoteIcon, TaskIcon } from '../../../toolkit'
import React from 'react'
import { IEntity } from '../Entity'
import { useEntities } from '../EntitiesProvider'
import ContextMenuItem, {
  ContextMenuItemType,
} from '../../core/ContextMenuItem'

export default function InputEntityContextMenu({
  entity,
}: {
  entity: IEntity
}) {
  const { removeItem, convert } = useEntities()

  return (
    <div>
      <Title>Convert to</Title>

      <ContextMenuItem
        label={'Note'}
        icon={<NoteIcon />}
        onClick={() => convert.toNote(entity.id)}
      />
      <ContextMenuItem
        label={'Next step'}
        icon={<TaskIcon />}
        onClick={() => convert.toNextStep(entity.id)}
      />
      <ContextMenuItem
        label={'Delete'}
        icon={<DeleteIcon />}
        onClick={() => removeItem(entity.id)}
        type={ContextMenuItemType.Error}
      />
    </div>
  )
}
