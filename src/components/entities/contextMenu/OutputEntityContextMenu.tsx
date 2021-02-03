import { DeleteIcon } from '../../../toolkit'
import React from 'react'
import { EntityOutputType, IEntity, useEntities } from '../EntitiesProvider'
import { clickContextItem } from './utils'
import ContextMenuItem from '../../core/contextMenu/ContextMenuItem'
import ContextMenu from '../../core/contextMenu/ContextMenu'

const typeToName = (type: EntityOutputType | undefined): string => {
  if (!type) return 'unknown'
  return {
    NOTE: 'notes',
    NEXT_STEP: 'next steps',
  }[type]
}

export default function OutputEntityContextMenu({
  entity,
  options,
}: {
  entity: IEntity
  options: { closeContextMenu: () => void }
}) {
  const { removeFromOutput } = useEntities()
  return (
    <ContextMenu title="Actions">
      <ContextMenuItem
        label={`Remove from ${typeToName(entity.output?.type)}`}
        icon={<DeleteIcon />}
        onClick={clickContextItem(() => removeFromOutput(entity.id), options)}
      />
    </ContextMenu>
  )
}
